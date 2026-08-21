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
    painPoint: string;
    features: string;
    engagement: string;
    name: string;
    email: string;
    discord: string;
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
  const entryPainPoint = process.env.GOOGLE_FORM_ENTRY_PAIN_POINT;
  const entryFeatures = process.env.GOOGLE_FORM_ENTRY_FEATURES;
  const entryEngagement = process.env.GOOGLE_FORM_ENTRY_ENGAGEMENT;
  const entryName = process.env.GOOGLE_FORM_ENTRY_NAME;
  const entryEmail = process.env.GOOGLE_FORM_ENTRY_EMAIL;
  const entryDiscord = process.env.GOOGLE_FORM_ENTRY_DISCORD;

  if (!actionUrl) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ACTION_URL');
  }
  if (!entryRole) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_ROLE');
  }
  if (!entryFrequency) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_FREQUENCY');
  }
  if (!entryPainPoint) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_PAIN_POINT');
  }
  if (!entryFeatures) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_FEATURES');
  }
  if (!entryEngagement) {
    throw new Error('Missing required environment variable: GOOGLE_FORM_ENTRY_ENGAGEMENT');
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

  return {
    actionUrl,
    entries: {
      role: entryRole,
      frequency: entryFrequency,
      painPoint: entryPainPoint,
      features: entryFeatures,
      engagement: entryEngagement,
      name: entryName,
      email: entryEmail,
      discord: entryDiscord,
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
