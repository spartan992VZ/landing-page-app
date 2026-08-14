'use client';

import { useEffect, useMemo, useState } from 'react';

const features = [
  {
    title: 'Eventos',
    description: 'Descubre partidas, operaciones y eventos cerca de ti. Inscribirte nunca fue tan fácil.',
    icon: (
      <svg className="w-12 h-12 text-lime-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Campos',
    description: 'Explora diferentes campos de juego, consulta disponibilidad y encuentra el ideal para ti.',
    icon: (
      <svg className="w-12 h-12 text-lime-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Chat por evento',
    description: 'Coordina misiones, comparte información y mantén toda la comunicación centralizada en un solo lugar.',
    icon: (
      <svg className="w-12 h-12 text-lime-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.876L3 20l1.159-3.48A7.962 7.962 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Escuadrones',
    description: 'Organiza equipos, asigna roles y tareas para cada misión. Mantén a tu escuadrón siempre sincronizado.',
    icon: (
      <svg className="w-12 h-12 text-lime-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentFeature = useMemo(
    () => features[activeIndex],
    [activeIndex]
  );

  return (
    <section id="features" className="bg-zinc-950 text-white py-24 sm:py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lime-400 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Características
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Todo lo que necesitas para tus operaciones
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Herramientas diseñadas específicamente para la comunidad de Airsoft
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12 shadow-2xl shadow-black/40"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-lime-400/80 mb-2">
                {activeIndex + 1} de {features.length}
              </p>
              <h3 className="text-3xl sm:text-4xl font-semibold">{currentFeature.title}</h3>
            </div>
            <div className="flex items-center gap-3">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  aria-label={`Ver ${feature.title}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-lime-400 scale-125' : 'bg-zinc-700 hover:bg-zinc-600'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="min-h-[200px] sm:min-h-[240px] flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-lime-500/10 flex items-center justify-center">
                  {currentFeature.icon}
                </div>
              </div>
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
                {currentFeature.description}
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <button
              type="button"
              className="rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600"
              onClick={() => setActiveIndex((activeIndex - 1 + features.length) % features.length)}
            >
              Anterior
            </button>
            <button
              type="button"
              className="rounded-full border border-lime-500/30 bg-lime-500/10 px-6 py-3 text-sm font-medium text-lime-400 transition-all duration-300 hover:bg-lime-500/20 hover:border-lime-500/50"
              onClick={() => setActiveIndex((activeIndex + 1) % features.length)}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
