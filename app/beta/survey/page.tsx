"use client";

import StepOne from "@/app/components/survey/StepOne";
import StepTwo from "@/app/components/survey/StepTwo";
import StepThree from "@/app/components/survey/StepThree";
import StepFour from "@/app/components/survey/StepFour";
import StepFive from "@/app/components/survey/StepFive";
import StepSix from "@/app/components/survey/StepSix";
import SurveyLayout from "@/app/components/survey/SurveyLayout";
import SuccessModal from "@/app/components/survey/SuccessModal";
import { SurveyData } from "@/app/types/survey";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SUCCESS_DISPLAY_TIME = 6000;
const SUCCESS_EXIT_TIME = 300;

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
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    role: "",
    frequency: undefined,
    problem: [],
    features: [],
    interest: undefined,
    betaJoin: {
      name: "",
      email: "",
      discord: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSuccessClosing, setIsSuccessClosing] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSuccess) return;

    const closeTimer = window.setTimeout(() => {
      setIsSuccessClosing(true);
    }, SUCCESS_DISPLAY_TIME);
    const redirectTimer = window.setTimeout(() => {
      router.replace("/");
      window.scrollTo(0, 0);
    }, SUCCESS_DISPLAY_TIME + SUCCESS_EXIT_TIME);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [isSuccess, router]);

  const currentStepConfig = stepConfig[currentStep - 1];

  const updateSurvey = (updates: Partial<SurveyData>) => {
    setSurveyData((prev) => ({ ...prev, ...updates }));
  };


  const canContinue = () => {
    if (currentStep === 1) return Boolean(surveyData.role);
    if (currentStep === 2) return Boolean(surveyData.frequency);
    if (currentStep === 3) return surveyData.problem && surveyData.problem.length > 0;
    return true;
  };

  const handleSubmit = async (data: SurveyData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Error al enviar el formulario');
      }
    } catch (error) {
      setSubmitError('Error de conexión. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SurveyLayout>
      <div className={isSuccess ? "hidden" : undefined}>
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
          surveyData={surveyData}
          name={surveyData.betaJoin?.name ?? ""}
          email={surveyData.betaJoin?.email ?? ""}
          discord={surveyData.betaJoin?.discord ?? ""}
          suggestion={surveyData.suggestion ?? ""}
          onChange={(field, value) => {
            if (field === "suggestion") {
              updateSurvey({ suggestion: value });
              return;
            }

            updateSurvey({
              betaJoin: {
                name: surveyData.betaJoin?.name ?? "",
                email: surveyData.betaJoin?.email ?? "",
                discord: surveyData.betaJoin?.discord ?? "",
                [field]: value,
              },
            });
          }}
          onSubmit={handleSubmit}
          onBack={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
          loading={isSubmitting}
        />
      )}

      {submitError && (
        <div className="mx-auto w-full max-w-xl px-4 py-6 sm:py-8 text-center">
          <div className="rounded-2xl bg-red-900/20 border border-red-500/30 p-8">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Error al enviar
            </h2>
            <p className="text-zinc-400 mb-4">
              {submitError}
            </p>
            <button
              onClick={() => {
                setSubmitError(null);
                setCurrentStep(6);
              }}
              className="rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-black hover:bg-lime-400 transition"
            >
              Intentar nuevamente
            </button>
          </div>
        </div>
      )}
      </div>

      {isSuccess && <SuccessModal open={!isSuccessClosing} />}
    </SurveyLayout>
  );
}