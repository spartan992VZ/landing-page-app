'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, LayoutDashboard, Smartphone } from 'lucide-react';

export default function Screenshots() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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

          <div className="rounded-2xl border-2 border-dashed border-neutral-800 bg-[#141414]/50 min-h-[400px] flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mb-5">
              <Smartphone className="w-8 h-8 text-neutral-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-400 mb-2.5">
              App Móvil
            </h3>
            <p className="text-center text-neutral-500 text-sm">
              Próximamente: Captura de pantalla de la app móvil
            </p>
          </div>

          <div
            className="bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer transition-all duration-500 ease-out group-hover:border-[#82c91e]/50 group-hover:shadow-[0_0_25px_rgba(130,201,30,0.15)]"
            onClick={() => setIsModalOpen(true)}
          >
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

            <div className="relative overflow-hidden">
              <img
                src="/dashboard-preview.png"
                alt="Dashboard Organizador"
                className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 text-white border border-[#82c91e] px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  Clic para ampliar vista previa
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] rounded-xl border border-neutral-800 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-neutral-800 text-white p-2 rounded-full hover:bg-[#82c91e] hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src="/dashboard-preview.png"
                alt="Dashboard Organizador - Vista completa"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}