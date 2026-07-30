'use client';

import { useEffect, useMemo, useState } from 'react';

const features = [
  {
    title: 'Eventos',
    description: 'Descubre partidas, operaciones y eventos cerca de ti.',
    icon: (
      <svg className="w-10 h-10 text-lime-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),  
  },
  {
    title: 'Campos',
    description: 'Explora diferentes campos de juego y encuentra el ideal para ti.',
    icon: (
      <svg className="w-10 h-10 text-lime-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Chat por evento',
    description: 'Coordina misiones y mantén toda la información centralizada.',
    icon: (
      <svg className="w-10 h-10 text-lime-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.876L3 20l1.159-3.48A7.962 7.962 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Escuadrones',
    description: 'Organiza equipos, roles y tareas para cada misión.',
    icon: (
      <svg className="w-10 h-10 text-lime-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
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
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentFeature = useMemo(
    () => features[activeIndex],
    [activeIndex]
  );

  return (
    <section id="features" className="bg-zinc-950 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Todo lo que necesitas para tus operaciones
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Un carrusel suave que muestra cada función principal con una
            transición pausada y fácil de controlar.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-lg shadow-black/30"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-2">
                Característica
              </p>
              <h3 className="text-3xl font-semibold">{currentFeature.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  aria-label={`Ver ${feature.title}`}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-lime-400' : 'bg-zinc-700'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="min-h-[240px]">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6">{currentFeature.icon}</div>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {currentFeature.description}
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              className="rounded-full border border-zinc-700 bg-zinc-950/70 px-4 py-2 text-sm text-white transition hover:bg-zinc-800"
              onClick={() => setActiveIndex((activeIndex - 1 + features.length) % features.length)}
            >
              Anterior
            </button>
            <button
              type="button"
              className="rounded-full border border-zinc-700 bg-lime-600 px-4 py-2 text-sm text-black transition hover:bg-lime-500"
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
