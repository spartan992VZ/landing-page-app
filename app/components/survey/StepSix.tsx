"use client";

import { useState } from "react";

type StepSixProps = {
  name?: string;
  email?: string;
  discord?: string;
  onChange: (field: "name" | "email" | "discord", value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  loading?: boolean;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StepSix({
  name = "",
  email = "",
  discord = "",
  onChange,
  onSubmit,
  onBack,
  loading = false,
}: StepSixProps) {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      setEmailError("Introduce un correo electrónico válido.");
      return false;
    }
    if (!emailRegex.test(value.trim())) {
      setEmailError("Introduce un correo electrónico válido.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (value: string) => {
    onChange("email", value);
    if (value.trim()) {
      validateEmail(value);
    } else {
      setEmailError("Introduce un correo electrónico válido.");
    }
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      onSubmit();
    }
  };

  const isSubmitDisabled = !email.trim() || !emailRegex.test(email.trim()) || loading;

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-6 sm:py-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            ¡Ya casi terminamos!
          </h1>
          <p className="mx-auto mt-4 text-base leading-7 text-zinc-400">
            Déjanos tus datos para mantenerte al tanto del lanzamiento y, si quieres, participar en las primeras pruebas.
          </p>
          <p className="mt-2 text-sm text-zinc-500">Este es el último paso.</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              ¿Cómo te llamamos?
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="Tu nombre"
              autoComplete="name"
              className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              ¿Cuál es tu correo electrónico?
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="tu@email.com"
              autoComplete="email"
              aria-invalid={!!emailError}
              aria-describedby={emailError ? "email-error" : undefined}
              className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500/50 aria-invalid:border-red-500"
            />
            {emailError && (
              <p id="email-error" className="text-sm text-red-400">
                {emailError}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="discord" className="block text-sm font-medium text-zinc-300">
              ¿Cuál es tu usuario de Discord?
            </label>
            <input
              id="discord"
              type="text"
              value={discord}
              onChange={(e) => onChange("discord", e.target.value)}
              placeholder="Ej. usuario#1234"
              autoComplete="off"
              className="w-full rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500/50"
            />
            <p className="text-sm text-zinc-500">
              Opcional. Puede servirnos para contactarte durante las pruebas de la Beta.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onBack}
              disabled={loading}
              className="w-full rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-500/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Volver
            </button>
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="w-full rounded-full bg-lime-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-lime-500/20 transition hover:bg-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500/50 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500 disabled:shadow-none"
            >
              {loading ? "Enviando..." : "Quiero unirme a la Beta"}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-zinc-500">
          Usaremos estos datos únicamente para comunicarnos contigo sobre el proyecto y la Beta.
        </p>
      </div>
    </div>
  );
}
