import { User, Clipboard, MapPin } from 'lucide-react';

export default function UserTypes() {
  return (
    <section
      id="users"
      className="bg-[#0d0d0d] text-white py-16 sm:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#82c91e] font-semibold uppercase tracking-[0.25em] text-xs mb-3">
            PARA QUIÉN ES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Una plataforma, tres comunidades
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada rol tiene lo que necesita. Todos en el mismo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">

          <div className="md:border-r border-neutral-800 md:pr-8 md:last:border-r-0 transition-transform hover:scale-105">
            <div className="mb-4">
              <User className="w-8 h-8 text-[#82c91e] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Jugadores
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="text-neutral-300 text-sm">
                Encontrá partidas y campos cerca de ti
              </li>
              <li className="text-neutral-300 text-sm">
                Unité a equipos y escuadrones
              </li>
              <li className="text-neutral-300 text-sm">
                Chat y anuncios por evento
              </li>
              <li className="text-neutral-300 text-sm">
                Estadísticas, historial y ranking
              </li>
            </ul>
          </div>

          <div className="md:border-r border-neutral-800 md:px-8 md:last:border-r-0 transition-transform hover:scale-105">
            <div className="mb-4">
              <Clipboard className="w-8 h-8 text-[#82c91e] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Organizadores
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="text-neutral-300 text-sm">
                Creá y publicá eventos fácilmente
              </li>
              <li className="text-neutral-300 text-sm">
                Gestioná asistentes, inscripciones y pagos
              </li>
              <li className="text-neutral-300 text-sm">
                Armá equipos y lados de partida
              </li>
              <li className="text-neutral-300 text-sm">
                Reportes y analíticas de asistencia
              </li>
            </ul>
          </div>

          <div className="md:pl-8 transition-transform hover:scale-105">
            <div className="mb-4">
              <MapPin className="w-8 h-8 text-[#82c91e] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Dueños de campos
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="text-neutral-300 text-sm">
                Publicá y destacá tu campo
              </li>
              <li className="text-neutral-300 text-sm">
                Gestioná disponibilidad, turnos y reservas
              </li>
              <li className="text-neutral-300 text-sm">
                Recibí más jugadores y organizadores
              </li>
              <li className="text-neutral-300 text-sm">
                Administrá reglas, servicios y alquileres
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}