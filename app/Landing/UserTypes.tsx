import { User, Clipboard, MapPin } from 'lucide-react';

export default function UserTypes() {
  return (
    <section
      id="users"
      className="bg-[#0d0d0d] px-4 py-12 text-white sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#82c91e]">
            PARA QUIÉN ES
          </p>
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Una plataforma, tres comunidades
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-400">
            Una idea pensada para conectar a toda la comunidad de Airsoft.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0">
          <div className="group border-neutral-800 md:pr-8 lg:border-r">
            <div className="mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
              <User className="mb-3 h-7 w-7 text-[#82c91e] transition-colors duration-300 group-hover:text-lime-300" />
              <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-lime-300">
                Jugadores
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Para quienes quieren encontrar y compartir partidas.
              </p>
            </div>
            <ul className="space-y-2.5">
              <li className="text-sm text-neutral-300">Encontrá partidas y campos cerca de vos</li>
              <li className="text-sm text-neutral-300">Unite a equipos y comunidades</li>
              <li className="text-sm text-neutral-300">Coordiná y comunicáte por evento</li>
            </ul>
          </div>

          <div className="group border-neutral-800 md:pl-8 lg:border-r lg:px-8">
            <div className="mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
              <Clipboard className="mb-3 h-7 w-7 text-[#82c91e] transition-colors duration-300 group-hover:text-lime-300" />
              <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-lime-300">
                Organizadores
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Para quienes crean y coordinan experiencias de juego.
              </p>
            </div>
            <ul className="space-y-2.5">
              <li className="text-sm text-neutral-300">Creá y publicá eventos</li>
              <li className="text-sm text-neutral-300">Gestioná asistentes e inscripciones</li>
              <li className="text-sm text-neutral-300">Coordiná jugadores, equipos y partidas</li>
            </ul>
          </div>

          <div className="group md:col-span-2 md:pt-8 lg:col-span-1 lg:pl-8 lg:pt-0">
            <div className="mb-5 transition-transform duration-300 group-hover:-translate-y-0.5">
              <MapPin className="mb-3 h-7 w-7 text-[#82c91e] transition-colors duration-300 group-hover:text-lime-300" />
              <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-lime-300">
                Campos e instalaciones
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Para quienes gestionan espacios de juego.
              </p>
            </div>
            <ul className="space-y-2.5">
              <li className="text-sm text-neutral-300">Publicá tu campo y disponibilidad</li>
              <li className="text-sm text-neutral-300">Gestioná horarios y reservas</li>
              <li className="text-sm text-neutral-300">Conectá con organizadores y jugadores</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}