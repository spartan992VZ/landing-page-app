"use client";

import { useEffect, useState } from "react";
import { Map, ClipboardList, Users, LayoutDashboard } from "lucide-react";
import QuestionStep, { QuestionOption } from "./QuestionStep";

type FeatureType = "find_events" | "manage_events" | "community" | "all_in_one";

type StepFourProps = {
  selectedFeatures?: FeatureType[];
  onNext: (features: FeatureType[]) => void;
  onBack: () => void;
};

const featureOptions: QuestionOption[] = [
  {
    id: "find_events",
    title: "Encontrar partidas fácilmente",
    description: "Descubrir eventos cerca de mí y recibir notificaciones.",
    value: "find_events",
    icon: Map,
  },
  {
    id: "manage_events",
    title: "Organizar partidas",
    description: "Crear eventos, gestionar jugadores y confirmar asistencia.",
    value: "manage_events",
    icon: ClipboardList,
  },
  {
    id: "community",
    title: "Conectar con la comunidad",
    description: "Encontrar equipos, jugadores y mantener la comunicación.",
    value: "community",
    icon: Users,
  },
  {
    id: "all_in_one",
    title: "Tener todo en un solo lugar",
    description: "Centralizar eventos, chats, campos y organización en una única aplicación.",
    value: "all_in_one",
    icon: LayoutDashboard,
  },
];

export default function StepFour({ selectedFeatures, onNext, onBack }: StepFourProps) {
  const [selected, setSelected] = useState<FeatureType[]>(selectedFeatures ?? []);

  useEffect(() => {
    if (selectedFeatures) {
      setSelected(selectedFeatures);
    }
  }, [selectedFeatures]);

  const handleSelectionChange = (values: string[]) => {
    setSelected(values as FeatureType[]);
  };

  const handleNext = () => {
    if (selected.length > 0) {
      onNext(selected);
    }
  };

  return (
    <QuestionStep
      step={4}
      totalSteps={6}
      title="Si existiera una aplicación para Airsoft, ¿qué sería lo más valioso para ti?"
      subtitle="Selecciona hasta dos funcionalidades que considerarías indispensables."
      estimatedTime="2 minutos"
      options={featureOptions}
      selectedValues={selected}
      selectionMode="multiple"
      maxSelections={2}
      showBack={true}
      onSelectionChange={handleSelectionChange}
      onBack={onBack}
      onNext={handleNext}
    />
  );
}