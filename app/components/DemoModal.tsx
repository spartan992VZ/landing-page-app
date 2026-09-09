'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Loader2 } from 'lucide-react';

type IframeState = 'loading' | 'loaded' | 'error';

interface DemoModalProps {
  url: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ url, title, isOpen, onClose }: DemoModalProps) {
  const [iframeState, setIframeState] = useState<IframeState>('loading');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIframeState('loading');
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIframeState('loaded');
  };

  const handleIframeError = () => {
    setIframeState('error');
  };

  if (!url) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-[90vw] max-w-[1400px] h-[85vh] max-h-[900px] rounded-xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-[#121212] flex-shrink-0">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Abrir demo completa</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative bg-[#0d0d0d] overflow-hidden">
              {iframeState === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-[#82c91e] animate-spin" />
                </div>
              )}

              {iframeState === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-neutral-400 mb-4">
                    No se pudo cargar la demo en esta ventana.
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#82c91e] text-black rounded-full font-semibold hover:bg-[#82c91e]/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Abrir demo completa ↗
                  </a>
                </div>
              )}

              <iframe
                src={url}
                title={title}
                className={`w-full h-full border-0 block ${iframeState === 'error' ? 'hidden' : ''}`}
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
