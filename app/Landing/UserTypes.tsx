export default function UserTypes() {
  return (
    <section
      id="users"
      className="bg-zinc-950 text-white py-16 sm:py-20 px-6 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-lime-400 font-semibold uppercase tracking-[0.25em] text-xs mb-3">
            Para quién es
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Diseñado para toda la comunidad
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Tanto si eres jugador como organizador, la plataforma tiene herramientas específicas para ti
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 shadow-xl shadow-black/30 hover:border-lime-500/30 transition-all duration-300">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-lime-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">
                Jugadores
              </h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Buscar y descubrir eventos cerca de ti</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Unirse a equipos y escuadrones</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Ver estadísticas y historial de partidas</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Chat con otros jugadores por evento</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Recibir notificaciones de eventos nuevos</span>
              </li>
            </ul>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 shadow-xl shadow-black/30 hover:border-lime-500/30 transition-all duration-300">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-lime-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">
                Organizadores
              </h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Crear y gestionar eventos fácilmente</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Administrar inscripciones y confirmaciones</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Gestionar campos y disponibilidad</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Analíticas y reportes de asistencia</span>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                <span className="text-lime-400 mt-0.5">✓</span>
                <span>Comunicación directa con participantes</span>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}