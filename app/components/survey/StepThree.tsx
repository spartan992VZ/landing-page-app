"use client";

import { useEffect, useState } from "react";
import { MapPinned, Users, UserRoundSearch, MessagesSquare } from "lucide-react";
import QuestionStep, { QuestionOption } from "./QuestionStep";

type PainPointType = "find_games" | "coordination" | "community" | "fragmented_information";

type StepThreeProps = {
  selectedProblem?: PainPointType[];
  onNext: (problem: PainPointType[]) => void;
  onBack: () => void;
};

const painPointOptions: QuestionOption[] = [
  {
    id: "find_games",
    title: "Encontrar partidas",
    description: "Muchas veces no sé dónde se organizan eventos o me entero demasiado tarde.",
    value: "find_games",
    icon: MapPinned,
  },
  {
    id: "coordination",
    title: "Coordinar con otras personas",
    description: "Es difícil organizar horarios, confirmar asistencia o mantener la comunicación.",
    value: "coordination",
    icon: Users,
  },
  {
    id: "community",
    title: "Encontrar jugadores o equipos",
    description: "Me cuesta conocer nuevos jugadores o integrarme a un grupo.",
    value: "community",
    icon: UserRoundSearch,
  },
  {
    id: "fragmented_information",
    title: "Toda la organización está dispersa",
    description: "La información está repartida entre WhatsApp, Facebook, Instagram y otros medios.",
    value: "fragmented_information",
    icon: MessagesSquare,
  },
];

export default function StepThree({ selectedProblem, onNext, onBack }: StepThreeProps) {
  const [selected, setSelected] = useState<PainPointType[]>(selectedProblem ?? []);

  useEffect(() => {
    if (selectedProblem) {
      setSelected(selectedProblem);
    }
  }, [selectedProblem]);

  const handleSelect = (value: string) => {
    const painPointValue = value as PainPointType;
    setSelected((prev) => {
      if (prev.includes(painPointValue)) {
        return prev.filter((item) => item !== painPointValue);
      } else {
        return [...prev, painPointValue];
      }
    });
  };

  const handleNext = () => {
    if (selected.length > 0) {
      onNext(selected);
    }
  };

  const handleSelectionChange = (values: string[]) => {
    setSelected(values as PainPointType[]);
  };

  return (
    <QuestionStep
      step={3}
      totalSteps={6}
      title="¿Qué es lo que más te cuesta al momento de organizar o participar en una partida?"
      subtitle="Selecciona una o más opciones que representen tu experiencia."
      estimatedTime="2 minutos"
      options={painPointOptions}
      selectedValues={selected}
      selectionMode="multiple"
      showBack={true}
      onSelectionChange={handleSelectionChange}
      onBack={onBack}
      onNext={handleNext}
    />
  );
}