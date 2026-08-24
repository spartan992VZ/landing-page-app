import Link from "next/link";
import { ArrowRight, Crosshair } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-[#0d0d0d] py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#121212] border border-[#82c91e]/40 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          
          <div className="absolute -z-10 w-96 h-96 bg-[#82c91e]/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative text-center">
            
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#82c91e] rounded-full animate-pulse" />
              <span className="text-[#82c91e] text-xs font-bold uppercase tracking-wider">
                ÚNETE A LA BETA PRIVADA
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              ¿Listo para tu próxima operación?
            </h2>

            <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Sé de los primeros en experimentar la plataforma que transformará la organización de partidas de Airsoft.
            </p>

            <Link href="/beta/survey">
              <button className="bg-[#82c91e] hover:bg-[#9be62e] text-black font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(130,201,30,0.4)] hover:shadow-[0_0_30px_rgba(130,201,30,0.6)] flex items-center justify-center gap-2 mx-auto">
                Unirme a la Beta
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1">
                <span className="text-[#82c91e]">✓</span>
                Acceso prioritario sin costo
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#82c91e]">✓</span>
                Sin instalación requerida
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#82c91e]">✓</span>
                Cupos limitados
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}