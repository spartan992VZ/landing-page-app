"use client";

import { useEffect, useState } from "react";
import QuestionStep, { QuestionOption } from "./QuestionStep";

type FrequencyType = "weekly" | "monthly2" | "monthly1" | "occasional" | "inactive";

type StepTwoProps = {
  selectedFrequency?: FrequencyType;
  onNext: (frequency: FrequencyType) => void;
  onBack: () => void;
};

const options: QuestionOption[] = [
  {
    id: "weekly",
    title: "Todas las semanas",
    description: "El Airsoft forma parte de mi rutina.",
    value: "weekly",
  },
  {
    id: "monthly2",
    title: "2 o 3 veces al mes",
    description: "Juego regularmente cuando hay eventos.",
    value: "monthly2",
  },
  {
    id: "monthly1",
    title: "Una vez al mes",
    description: "Suelo asistir cuando puedo.",
    value: "monthly1",
  },
  {
    id: "occasional",
    title: "Cada tanto",
    description: "Juego de forma ocasional.",
    value: "occasional",
  },
  {
    id: "inactive",
    title: "Hace mucho que no juego",
    description: "Me gustaría volver a participar.",
    value: "inactive",
  },
];

export default function StepTwo({ selectedFrequency, onNext, onBack }: StepTwoProps) {
  const [selected, setSelected] = useState<FrequencyType | "">(
    selectedFrequency ?? ""
  );

  useEffect(() => {
    if (selectedFrequency) {
      setSelected(selectedFrequency);
    }
  }, [selectedFrequency]);

  const handleSelect = (value: string) => {
    setSelected(value as FrequencyType);
  };

  const handleNext = () => {
    if (selected) {
      onNext(selected);
    }
  };

  return (
    <QuestionStep
      step={2}
      totalSteps={6}
      title="¿Con qué frecuencia juegas Airsoft?"
      subtitle="Elige la opción que mejor describe tu ritmo."
      estimatedTime="2 minutos"
      options={options}
      selectedValue={selected}
      showBack
      onSelect={handleSelect}
      onNext={handleNext}
      onBack={onBack}
    />
  );
}
