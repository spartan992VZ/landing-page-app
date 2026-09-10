/**
 * Next.js API Route for survey submission.
 * This route receives survey data from the client and forwards it to the Google Forms adapter.
 * All Google Forms configuration and submission logic is server-side only.
 */

import { NextRequest, NextResponse } from 'next/server';
import { submitSurveyToGoogleForms } from '@/lib/adapters/googleFormsAdapter';
import type { SurveyData } from '@/app/types/survey';

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    
    // Basic validation
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const surveyData: SurveyData = body;

    // Validate required fields
    if (!surveyData.role) {
      return NextResponse.json(
        { error: 'Role is required' },
        { status: 400 }
      );
    }

    // Submit to Google Forms via adapter
    const result = await submitSurveyToGoogleForms(surveyData);

    if (result.success) {
      return NextResponse.json(
        { message: result.message },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: result.message || 'Submission failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Survey submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
