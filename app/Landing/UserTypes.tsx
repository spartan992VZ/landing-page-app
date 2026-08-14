export default function UserTypes() {
  return (
    <section
      id="users"
      className="bg-zinc-950 text-white py-24 sm:py-32 px-6 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-lime-400 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Para quién es
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Diseñado para toda la comunidad
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Tanto si eres jugador como organizador, la plataforma tiene herramientas específicas para ti
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10 shadow-xl shadow-black/30 hover:border-lime-500/30 transition-all duration-300">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-lime-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">
                Jugadores
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Buscar y descubrir eventos cerca de ti</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Unirse a equipos y escuadrones</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Ver estadísticas y historial de partidas</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Chat con otros jugadores por evento</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Recibir notificaciones de eventos nuevos</span>
              </li>
            </ul>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10 shadow-xl shadow-black/30 hover:border-lime-500/30 transition-all duration-300">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-lime-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">
                Organizadores
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Crear y gestionar eventos fácilmente</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Administrar inscripciones y confirmaciones</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Gestionar campos y disponibilidad</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Analíticas y reportes de asistencia</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <span className="text-lime-400 mt-1">✓</span>
                <span>Comunicación directa con participantes</span>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}