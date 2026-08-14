"use client";

import StepOne from "@/app/components/survey/StepOne";
import StepTwo from "@/app/components/survey/StepTwo";
import StepThree from "@/app/components/survey/StepThree";
import StepFour from "@/app/components/survey/StepFour";
import StepFive from "@/app/components/survey/StepFive";
import StepSix from "@/app/components/survey/StepSix";
import SurveyLayout from "@/app/components/survey/SurveyLayout";
import { SurveyData } from "@/app/types/survey";
import { useState } from "react";

const stepConfig = [
  {
    title: "¿Cuál es tu rol dentro de la comunidad?",
    subtitle: "Queremos conocerte antes de comenzar.",
  },
  {
    title: "¿Con qué frecuencia participas en partidas?",
    subtitle: "Esto nos ayuda a entender mejor cómo vive la comunidad este hobby.",
  },
  {
    title: "¿Qué es lo que más te cuesta hoy cuando participas en partidas de Airsoft?",
    subtitle: "Selecciona el problema que más te gustaría resolver.",
  },
  {
    title: "¿Qué funciones te interesan más?",
    subtitle: "Elige las herramientas que te ayudarían más.",
  },
  {
    title: "Nos gustaría construir esta aplicación junto a la comunidad.",
    subtitle: "Tu opinión puede influir en las primeras versiones de la plataforma.",
    progress: 80,
  },
  {
    title: "¡Gracias por ayudarnos! 🎉",
    subtitle:
      "Estamos construyendo esta plataforma junto a la comunidad de Airsoft. Déjanos tus datos y serás de los primeros en enterarte cuando la Beta esté disponible.",
    progress: 100,
  },
];

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    role: "",
    frequency: undefined,
    problem: undefined,
    features: [],
    interest: undefined,
    betaJoin: {
      name: "",
      email: "",
      discord: "",
    },
  });

  const currentStepConfig = stepConfig[currentStep - 1];

  const updateSurvey = (updates: Partial<SurveyData>) => {
    setSurveyData((prev) => ({ ...prev, ...updates }));
  };


  const canContinue = () => {
    if (currentStep === 1) return Boolean(surveyData.role);
    if (currentStep === 2) return Boolean(surveyData.frequency);
    return true;
  };

  return (
    <SurveyLayout>
      {currentStep === 1 && (
        <StepOne
          selectedRole={surveyData.role}
          onNext={(role) => {
            updateSurvey({ role });
            setCurrentStep((prev) => prev + 1);
          }}
        />
      )}

      {currentStep === 2 && (
        <StepTwo
          selectedFrequency={surveyData.frequency}
          onNext={(frequency) => {
            updateSurvey({ frequency });
            setCurrentStep((prev) => prev + 1);
          }}
          onBack={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
        />
      )}

      {currentStep === 3 && (
        <StepThree
          selectedProblem={surveyData.problem}
          onNext={(problem) => {
            updateSurvey({ problem });
            setCurrentStep((prev) => prev + 1);
          }}
          onBack={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
        />
      )}

      {currentStep === 4 && (
        <StepFour
          selectedFeatures={surveyData.features}
          onNext={(features) => {
            updateSurvey({ features });
            setCurrentStep((prev) => prev + 1);
          }}
          onBack={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
        />
      )}

      {currentStep === 5 && (
        <StepFive
          selectedInterest={surveyData.interest}
          onNext={(interest) => {
            updateSurvey({ interest });
            setCurrentStep((prev) => prev + 1);
          }}
          onBack={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
        />
      )}

      {currentStep === 6 && (
        <StepSix
          name={surveyData.betaJoin?.name ?? ""}
          email={surveyData.betaJoin?.email ?? ""}
          discord={surveyData.betaJoin?.discord ?? ""}
          onChange={(field, value) => {
            updateSurvey({
              betaJoin: {
                name: surveyData.betaJoin?.name ?? "",
                email: surveyData.betaJoin?.email ?? "",
                discord: surveyData.betaJoin?.discord ?? "",
                [field]: value,
              },
            });
          }}
          onSubmit={() => {
            alert("¡Gracias por unirte a la Beta!\n\nDatos enviados:\n" + JSON.stringify(surveyData, null, 2));
          }}
          onBack={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
        />
      )}
    </SurveyLayout>
  );
}