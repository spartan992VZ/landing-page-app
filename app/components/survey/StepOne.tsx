"use client";

import { useState } from "react";
import { User, ClipboardList, Shield } from "lucide-react";
import OptionCard from "./OptionCard";

type StepOneProps = {
    selectedRole: string;
    onSelect: (role: string) => void;
}

export default function StepOne(
    {
    selectedRole,
    onSelect
}: StepOneProps) {

  return (
    <div className="space-y-6">

      <OptionCard
        title="Jugador"
        description="Participo en partidas y busco eventos y equipos."
        icon={User}
        selected={selectedRole === "player"}
        onClick={() => onSelect("player")}
      />

      <OptionCard
        title="Organizador"
        description="Organizo partidas y administro jugadores."
        icon={ClipboardList}
        selected={selectedRole === "organizer"}
        onClick={() => onSelect("organizer")}
      />

      <OptionCard
        title="Ambos"
        description="Juego y además organizo eventos."
        icon={Shield}
        selected={selectedRole === "both"}
        onClick={() => onSelect("both")}
      />

    </div>
  );
}