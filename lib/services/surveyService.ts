/**
 * Client-side service for survey submission.
 * This service handles the communication between the UI and the API route.
 * No direct Google Forms calls are made from the client.
 */

import type { SurveyData } from '@/app/types/survey';

export interface SurveySubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Submits survey data to the API route.
 * This function should be called from the UI layer (e.g., StepSix).
 */
export async function submitSurvey(
  data: SurveyData
): Promise<SurveySubmissionResult> {
  try {
    const response = await fetch('/api/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      return {
        success: false,
        message: 'Error submitting survey',
        error: errorData.error || response.statusText,
      };
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Survey submitted successfully',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Network error',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
