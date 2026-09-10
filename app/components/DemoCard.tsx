'use client';

import { useState } from 'react';
import { Smartphone, LayoutDashboard, Maximize2, Loader2, ExternalLink } from 'lucide-react';

type DemoType = 'player' | 'organizer';

interface DemoCardProps {
  type: DemoType;
  url: string;
  onOpen: () => void;
}

export default function DemoCard({ type, url, onOpen }: DemoCardProps) {
  const [iframeState, setIframeState] = useState<'loading' | 'loaded' | 'error'>('loading');

  const handleIframeLoad = () => {
    setIframeState('loaded');
  };

  const handleIframeError = () => {
    setIframeState('error');
  };

  const isPlayer = type === 'player';

  if (!url) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-neutral-800 bg-[#141414]/50 min-h-[400px] flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mb-5">
          {isPlayer ? (
            <Smartphone className="w-8 h-8 text-neutral-600" />
          ) : (
            <LayoutDashboard className="w-8 h-8 text-neutral-600" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-neutral-400 mb-2.5">
          {isPlayer ? 'App Móvil' : 'Dashboard Organizador'}
        </h3>
        <p className="text-center text-neutral-500 text-sm">
          Demo no disponible. Configura la URL en las variables de entorno.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ease-out ${
        isPlayer
          ? 'bg-[#121212] rounded-[2.5rem] border-8 border-neutral-900 shadow-2xl'
          : 'bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl'
      } group cursor-pointer hover:border-[#82c91e]/50 hover:shadow-[0_0_25px_rgba(130,201,30,0.15)]`}
      onClick={onOpen}
    >
      {isPlayer && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-neutral-900 rounded-b-xl z-10" />
      )}

      {!isPlayer && (
        <div className="bg-neutral-900/50 border-b border-neutral-800 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-neutral-500 font-mono">
              app.airsoftoperations.com/dashboard
            </span>
          </div>
        </div>
      )}

      <div
        className={`relative overflow-hidden ${isPlayer ? 'h-[500px] pt-8' : 'h-[400px]'}`}
      >
        {iframeState === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d]">
            <Loader2 className="w-8 h-8 text-[#82c91e] animate-spin" />
          </div>
        )}

        {iframeState === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d0d] p-6 text-center">
            <p className="text-neutral-400 mb-4 text-sm">
              No se pudo cargar la demo en esta vista.
            </p>
            <div className="flex items-center gap-2 text-[#82c91e] text-sm font-semibold">
              <Maximize2 className="w-4 h-4" />
              <span>Explorar demo</span>
            </div>
          </div>
        )}

        <iframe
          src={url}
          title={isPlayer ? 'App Móvil' : 'Dashboard Organizador'}
          className={`w-full h-full border-0 block ${iframeState === 'error' ? 'hidden' : ''}`}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/80 text-white border border-[#82c91e] px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            Explorar demo
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#82c91e] text-black rounded-full text-xs font-semibold hover:bg-[#82c91e]/90 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          <span className="hidden sm:inline">Abrir demo completa</span>
        </a>
      </div>
    </div>
  );
}
