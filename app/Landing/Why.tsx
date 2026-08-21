export default function Why() {
  const currentChannels = [
    "Grupos de WhatsApp",
    "Telegram",
    "Instagram y Facebook",
    "Mensajes individuales",
    "Hojas de cálculo",
  ];

  const proposedSolution = [
    "Chat por partida o evento",
    "Creación y gestión de eventos",
    "Inscripciones ordenadas y visibles",
    "Calendario centralizado",
    "Comunicación clara para organizadores y jugadores",
  ];

  return (
    <section id="why" className="bg-zinc-950 text-white py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lime-400 font-semibold uppercase tracking-[0.25em] text-xs mb-3">
            ¿Te resulta familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Organizar partidas de Airsoft hoy suele ser caos
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            La comunidad suele coordinar por varios canales a la vez, y eso
            termina generando confusión, pérdida de información y más trabajo
            del necesario.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 shadow-xl shadow-black/30">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Redes actuales de coordinación
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 mb-5">
              {currentChannels.map((channel) => (
                <span
                  key={channel}
                  className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-300"
                >
                  {channel}
                </span>
              ))}
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Se mezclan mensajes de grupos, anuncios por redes sociales,
              confirmaciones por chat privado y listas manuales. Todo eso hace
              que sea difícil saber qué pasa, quién vino y qué evento está
              activo.
            </p>
          </div>

          <div className="rounded-3xl border border-lime-500/30 bg-lime-500/5 p-6 sm:p-8 shadow-xl shadow-lime-500/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-lime-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">
                Cómo propone esto la plataforma
              </h3>
            </div>
            <div className="space-y-2.5 mb-5">
              {proposedSolution.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-lime-500/20 bg-zinc-900/50 p-3"
                >
                  <span className="mt-0.5 text-lime-400 flex-shrink-0">✓</span>
                  <p className="text-sm text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              La idea es reemplazar esa dispersión con un espacio único donde
              se puedan crear eventos, coordinar partidas, hablar por chat de
              grupo y mantener todo más ordenado y claro para la comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}