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
 * For checkbox fields (problem and features), each option is sent as a separate entry.
 */
function transformToGoogleFormsFormat(
  data: SurveyData,
  config: GoogleFormsConfig
): URLSearchParams {
  const body = new URLSearchParams();

  // Map role
  if (data.role) {
    body.append(config.entries.role, data.role);
  }

  // Map frequency
  if (data.frequency) {
    body.append(config.entries.frequency, data.frequency);
  }

  // Map problem (checkbox field - multiple entries with same key)
  if (data.problem && Array.isArray(data.problem)) {
    data.problem.forEach((value) => {
      body.append(config.entries.problem, value);
    });
  }

  // Map features (checkbox field - multiple entries with same key)
  if (data.features && Array.isArray(data.features)) {
    data.features.forEach((value) => {
      body.append(config.entries.features, value);
    });
  }

  // Map interest
  if (data.interest) {
    body.append(config.entries.interest, data.interest);
  }

  // Map beta join data if present
  if (data.betaJoin) {
    if (data.betaJoin.name) {
      body.append(config.entries.name, data.betaJoin.name);
    }
    if (data.betaJoin.email) {
      body.append(config.entries.email, data.betaJoin.email);
    }
    if (data.betaJoin.discord) {
      body.append(config.entries.discord, data.betaJoin.discord);
    }
  }

  return body;
}

/**
 * Submits data to Google Forms using the configured action URL.
 * Uses URLSearchParams to send the data as a POST request with application/x-www-form-urlencoded.
 */
async function submitToGoogleForms(
  formData: URLSearchParams,
  config: GoogleFormsConfig
): Promise<GoogleFormsSubmissionResult> {
  try {
    const response = await fetch(config.actionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
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
