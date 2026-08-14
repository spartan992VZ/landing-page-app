"use client";

import { useEffect, useState } from "react";
import { ClipboardList, Shield, Users, User } from "lucide-react";
import QuestionStep, { QuestionOption } from "./QuestionStep";

type RoleType = "player" | "organizer" | "both";

type StepOneProps = {
  selectedRole?: RoleType | "";
  onNext: (role: RoleType) => void;
};

const roleOptions: QuestionOption[] = [
  {
    id: "player",
    title: "Jugador",
    description: "Disfruto participar en partidas organizadas por otros jugadores.",
    value: "player",
    icon: User,
  },
  {
    id: "organizer",
    title: "Organizador de partidas",
    description: "Me encargo de organizar partidas y coordinar a los participantes.",
    value: "organizer",
    icon: Shield,
  },
  {
    id: "both",
    title: "Ambos",
    description: "Además de jugar, también organizo eventos para la comunidad.",
    value: "both",
    icon: Users,
  },
];

export default function StepOne({ selectedRole, onNext }: StepOneProps) {
  const [selected, setSelected] = useState<RoleType | "">(selectedRole ?? "");

  useEffect(() => {
    if (selectedRole) {
      setSelected(selectedRole);
    }
  }, [selectedRole]);

  const handleSelect = (value: string) => {
    setSelected(value as RoleType);
  };

  const handleNext = () => {
    if (selected) {
      onNext(selected);
    }
  };

  return (
    <QuestionStep
      step={1}
      totalSteps={6}
      title="¿Cómo participas normalmente en el Airsoft?"
      subtitle="Empecemos por conocerte un poco mejor."
      estimatedTime="2 minutos"
      options={roleOptions}
      selectedValue={selected}
      showBack={false}
      onSelect={handleSelect}
      onNext={handleNext}
    />
  );
}
