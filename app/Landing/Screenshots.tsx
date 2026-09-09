'use client';

import { useState } from 'react';
import DemoCard from '@/app/components/DemoCard';
import DemoModal from '@/app/components/DemoModal';
import { getDemosConfig } from '@/lib/config/demosConfig';

export default function Screenshots() {
  const [activeDemo, setActiveDemo] = useState<'player' | 'organizer' | null>(null);
  const demosConfig = getDemosConfig();

  const handleOpenPlayer = () => setActiveDemo('player');
  const handleOpenOrganizer = () => setActiveDemo('organizer');
  const handleCloseModal = () => setActiveDemo(null);

  return (
    <section
      id="screenshots"
      className="bg-[#0d0d0d] text-white py-16 sm:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#82c91e] font-semibold uppercase tracking-[0.25em] text-xs mb-3">
            Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            La plataforma en acción
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Descubre cómo funciona la plataforma desde cualquier dispositivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <DemoCard
            type="player"
            url={demosConfig.playerUrl}
            onOpen={handleOpenPlayer}
          />

          <DemoCard
            type="organizer"
            url={demosConfig.organizerUrl}
            onOpen={handleOpenOrganizer}
          />
        </div>

        <DemoModal
          url={activeDemo === 'player' ? demosConfig.playerUrl : demosConfig.organizerUrl}
          title={activeDemo === 'player' ? 'App Móvil - Demo Interactiva' : 'Dashboard Organizador - Demo Interactiva'}
          isOpen={activeDemo !== null}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}