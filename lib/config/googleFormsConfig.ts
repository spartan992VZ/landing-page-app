/**
 * Server-side configuration for Google Forms integration.
 * This module reads environment variables for Google Forms submission.
 * All variables are server-side only (no NEXT_PUBLIC_ prefix).
 */

export interface GoogleFormsConfig {
  actionUrl: string;
  entries: {
    role: string;
    frequency: string;
    problem: string;
    features: string;
    interest: string;
    name: string;
    email: string;
    discord: string;
    suggestion: string;
  };
}

/**
 * Validates that all required environment variables are present.
 * Throws an error if any required variable is missing.
 */
function validateConfig(): GoogleFormsConfig {
  const actionUrl = process.env.GOOGLE_FORM_ACTION_URL;
  const entryRole = process.env.GOOGLE_FORM_ENTRY_ROLE;
  const entryFrequency = process.env.GOOGLE_FORM_ENTRY_FREQUENCY;
  const entryProblem = process.env.GOOGLE_FORM_ENTRY_PROBLEM;
  const entryFeatures = process.env.GOOGLE_FORM_ENTRY_FEATURES;
  const entryInterest = process.env.GOOGLE_FORM_ENTRY_INTEREST;
  const entryName = process.env.GOOGLE_FORM_ENTRY_NAME;
  const entryEmail = process.env.GOOGLE_FORM_ENTRY_EMAIL;
  const entryDiscord = process.env.GOOGLE_FORM_ENTRY_DISCORD;
  const entrySuggestion = process.env.GOOGLE_FORM_ENTRY_SUGGESTION;

  if (!actionUrl) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ACTION_URL');
  }
  if (!entryRole) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_ROLE');
  }
  if (!entryFrequency) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_FREQUENCY');
  }
  if (!entryProblem) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_PROBLEM');
  }
  if (!entryFeatures) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_FEATURES');
  }
  if (!entryInterest) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_INTEREST');
  }
  if (!entryName) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_NAME');
  }
  if (!entryEmail) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_EMAIL');
  }
  if (!entryDiscord) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_DISCORD');
  }
  if (!entrySuggestion) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_SUGGESTION');
  }

  return {
    actionUrl,
    entries: {
      role: entryRole,
      frequency: entryFrequency,
      problem: entryProblem,
      features: entryFeatures,
      interest: entryInterest,
      name: entryName,
      email: entryEmail,
      discord: entryDiscord,
      suggestion: entrySuggestion,
    },
  };
}

/**
 * Returns the Google Forms configuration.
 * This function should only be called on the server side.
 */
export function getGoogleFormsConfig(): GoogleFormsConfig {
  return validateConfig();
}
