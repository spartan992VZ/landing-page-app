import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#82c91e] mb-2">404</h1>
          <div className="w-24 h-1 bg-[#82c91e] mx-auto" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Misión no encontrada
        </h2>
        
        <p className="text-neutral-400 mb-8 leading-relaxed">
          La página que buscas no existe o ha sido movida. 
          Regresa a la base para continuar tu operación.
        </p>
        
        <Link href="/">
          <button className="bg-[#82c91e] hover:bg-[#9be62e] text-black font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(130,201,30,0.4)] hover:shadow-[0_0_30px_rgba(130,201,30,0.6)] flex items-center justify-center gap-2 mx-auto">
            <Home className="w-5 h-5" />
            Volver a la Base
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
