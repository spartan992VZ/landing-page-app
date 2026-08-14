"use client";

import { useEffect, useState } from "react";
import { Rocket, Lightbulb, Handshake, Bell } from "lucide-react";
import QuestionStep, { QuestionOption } from "./QuestionStep";

type EngagementType = "beta" | "feedback" | "both" | "news";

type StepFiveProps = {
  selectedInterest?: EngagementType;
  onNext: (interest: EngagementType) => void;
  onBack: () => void;
};

const engagementOptions: QuestionOption[] = [
  {
    id: "beta",
    title: "Sí, quiero probar la Beta",
    description: "Me interesa recibir acceso anticipado y probar las nuevas funciones.",
    value: "beta",
    icon: Rocket,
  },
  {
    id: "feedback",
    title: "Sí, quiero aportar ideas",
    description: "Me gustaría participar enviando sugerencias y comentarios.",
    value: "feedback",
    icon: Lightbulb,
  },
  {
    id: "both",
    title: "Ambas opciones",
    description: "Quiero probar la aplicación y colaborar con su desarrollo.",
    value: "both",
    icon: Handshake,
  },
  {
    id: "news",
    title: "Solo quiero recibir novedades",
    description: "No quiero participar activamente, pero sí conocer el avance del proyecto.",
    value: "news",
    icon: Bell,
  },
];

export default function StepFive({ selectedInterest, onNext, onBack }: StepFiveProps) {
  const [selected, setSelected] = useState<EngagementType | "">(selectedInterest ?? "");

  useEffect(() => {
    if (selectedInterest) {
      setSelected(selectedInterest);
    }
  }, [selectedInterest]);

  const handleSelect = (value: string) => {
    setSelected(value as EngagementType);
  };

  const handleNext = () => {
    if (selected) {
      onNext(selected);
    }
  };

  return (
    <QuestionStep
      step={5}
      totalSteps={6}
      title="¿Te gustaría formar parte de este proyecto?"
      subtitle="Queremos construir esta plataforma junto con la comunidad. Tu participación puede ayudarnos a desarrollar una herramienta realmente útil."
      estimatedTime="1 minuto"
      options={engagementOptions}
      selectionMode="single"
      selectedValue={selected}
      showBack={true}
      onSelect={handleSelect}
      onBack={onBack}
      onNext={handleNext}
    />
  );
}
