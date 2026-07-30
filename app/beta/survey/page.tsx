"use client";

import StepOne from "@/app/components/survey/StepOne";
import SurveyLayout from "@/app/components/survey/SurveyLayout";
import { useState } from "react";

export default function SurveyPage() {

  const [surveyData, setSurveyData] = useState({
    role: "",
    country: "",
    province: "",
    city: "",
    problems: [],
    features: [],
    name: "",
    email: ""
});

  return (
    <SurveyLayout
      title="¿Cuál es tu rol dentro de la comunidad?"
      subtitle="Queremos conocerte antes de comenzar."
      step={1}
      totalSteps={5}
    >
      <StepOne
        selectedRole={surveyData.role}
        onSelect={(role) => setSurveyData({ ...surveyData, role })}
      />
    </SurveyLayout>
  );
}