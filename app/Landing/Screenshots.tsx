export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="bg-zinc-950 text-white py-16 sm:py-20 px-6 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-lime-400 font-semibold uppercase tracking-[0.25em] text-xs mb-3">
            Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            La plataforma en acción
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            AGREGAR MOCKUP DE LA APLICACIÓN
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

          <div className="rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 min-h-[400px] flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zinc-400 mb-2.5">
              App Móvil
            </h3>
            <p className="text-center text-zinc-500 text-sm">
              AGREGAR CAPTURA DE PANTALLA DE LA APP MÓVIL
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 min-h-[400px] flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zinc-400 mb-2.5">
              Dashboard Organizador
            </h3>
            <p className="text-center text-zinc-500 text-sm">
              AGREGAR CAPTURA DE PANTALLA DEL DASHBOARD
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}