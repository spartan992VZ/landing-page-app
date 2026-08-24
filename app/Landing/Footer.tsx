import { Camera, Play, MessageCircle, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#090909] text-neutral-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-white text-xl font-bold">
                AIRSOFT OPERATIONS
              </h3>
              <span className="w-2 h-2 bg-[#82c91e] rounded-full animate-pulse" />
            </div>
            <p className="text-sm text-neutral-400">
              Conecta. Coordina. Conquista.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#82c91e]">
              <span className="w-1.5 h-1.5 bg-[#82c91e] rounded-full" />
              Red Operativa
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-4">
              Plataforma
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#users" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Para Jugadores
                </a>
              </li>
              <li>
                <a href="#users" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Para Organizadores
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Campos Aliados
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-4">
              Comunidad
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Discord Oficial
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Preguntas Frecuentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Soporte Táctico
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-400 hover:text-[#82c91e] transition-colors">
                  Reglamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wider mb-4">
              Redes Sociales
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#82c91e] hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#82c91e] hover:text-black transition-all"
                aria-label="YouTube"
              >
                <Play className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#82c91e] hover:text-black transition-all"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#82c91e] hover:text-black transition-all"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-neutral-800/60 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
          <p>
            © 2026 Airsoft Operations. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#82c91e] transition-colors">
              Términos de Servicio
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#82c91e] transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}