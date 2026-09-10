'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Error de Sistema
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Operación interrumpida
        </h2>
        
        <p className="text-neutral-400 mb-8 leading-relaxed">
          Ha ocurrido un error inesperado en el sistema. 
          Nuestro equipo técnico ha sido notificado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Reintentar
          </button>
          
          <Link href="/">
            <button className="bg-[#82c91e] hover:bg-[#9be62e] text-black font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(130,201,30,0.4)] hover:shadow-[0_0_30px_rgba(130,201,30,0.6)] flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Volver a la Base
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
