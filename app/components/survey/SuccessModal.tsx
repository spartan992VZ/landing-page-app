"use client";

import { AnimatePresence, motion } from "framer-motion";

type SuccessModalProps = {
  open: boolean;
};

export default function SuccessModal({ open }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="survey-success-title"
          aria-describedby="survey-success-description"
        >
          <motion.div
            className="w-full max-w-md rounded-3xl border border-zinc-700/80 bg-zinc-950 p-7 text-center shadow-2xl shadow-black/40 sm:p-10"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-lime-400/40 bg-lime-400/10 text-lime-400">
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
              </svg>
            </div>
            <h2 id="survey-success-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              ¡Gracias por participar!
            </h2>
            <p id="survey-success-description" className="mx-auto mt-4 max-w-sm text-sm leading-6 text-zinc-400 sm:text-base">
              Tu respuesta fue recibida. Tus aportes nos ayudan a construir la próxima generación de la comunidad de Airsoft.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
