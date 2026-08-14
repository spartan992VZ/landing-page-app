export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="bg-zinc-950 text-white py-24 sm:py-32 px-6 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-lime-400 font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Preview
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            La plataforma en acción
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            AGREGAR MOCKUP DE LA APLICACIÓN
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          <div className="rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 min-h-[500px] flex flex-col items-center justify-center p-8">
            <div className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-zinc-400 mb-3">
              App Móvil
            </h3>
            <p className="text-center text-zinc-500">
              AGREGAR CAPTURA DE PANTALLA DE LA APP MÓVIL
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 min-h-[500px] flex flex-col items-center justify-center p-8">
            <div className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-zinc-400 mb-3">
              Dashboard Organizador
            </h3>
            <p className="text-center text-zinc-500">
              AGREGAR CAPTURA DE PANTALLA DEL DASHBOARD
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}