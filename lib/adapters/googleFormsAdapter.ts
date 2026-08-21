/**
 * Server-side adapter for Google Forms submission.
 * This adapter handles the transformation of SurveyData to Google Forms format
 * and performs the actual submission to Google Forms via POST request.
 */

import type { SurveyData } from '@/app/types/survey';
import { getGoogleFormsConfig, type GoogleFormsConfig } from '@/lib/config/googleFormsConfig';

export interface GoogleFormsSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Transforms SurveyData to Google Forms entry format.
 * Maps survey fields to Google Forms entry IDs.
 */
function transformToGoogleFormsFormat(
  data: SurveyData,
  config: GoogleFormsConfig
): Record<string, string> {
  const formData: Record<string, string> = {};

  // Map role
  formData[config.entries.role] = data.role || '';

  // Map frequency
  formData[config.entries.frequency] = data.frequency || '';

  // Map pain point
  formData[config.entries.painPoint] = data.problem || '';

  // Map features (array to comma-separated string)
  formData[config.entries.features] = data.features?.join(', ') || '';

  // Map engagement/interest
  formData[config.entries.engagement] = data.interest || '';

  // Map beta join data if present
  if (data.betaJoin) {
    formData[config.entries.name] = data.betaJoin.name || '';
    formData[config.entries.email] = data.betaJoin.email || '';
    formData[config.entries.discord] = data.betaJoin.discord || '';
  } else {
    formData[config.entries.name] = '';
    formData[config.entries.email] = '';
    formData[config.entries.discord] = '';
  }

  return formData;
}

/**
 * Submits data to Google Forms using the configured action URL.
 * Uses FormData to send the data as a POST request.
 */
async function submitToGoogleForms(
  formData: Record<string, string>,
  config: GoogleFormsConfig
): Promise<GoogleFormsSubmissionResult> {
  try {
    // Create FormData for Google Forms submission
    const body = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      body.append(key, value);
    });

    const response = await fetch(config.actionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
      // Note: Google Forms may not support CORS, so we might need to handle this
      // with a no-cors mode or use a different approach in production
      mode: 'no-cors',
    });

    // With no-cors mode, we can't read the response, but we assume success
    // if no network error occurred
    return {
      success: true,
      message: 'Survey submitted to Google Forms',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit to Google Forms',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Main adapter function that transforms and submits survey data to Google Forms.
 * This function should only be called on the server side.
 */
export async function submitSurveyToGoogleForms(
  data: SurveyData
): Promise<GoogleFormsSubmissionResult> {
  try {
    const config = getGoogleFormsConfig();
    const formData = transformToGoogleFormsFormat(data, config);
    return await submitToGoogleForms(formData, config);
  } catch (error) {
    return {
      success: false,
      message: 'Configuration error',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
