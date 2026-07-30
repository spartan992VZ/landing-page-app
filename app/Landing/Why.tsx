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
    <section id="why" className="bg-zinc-950 text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3">
            ¿Te resulta familiar?
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Organizar partidas de Airsoft hoy suele ser caos
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            La comunidad suele coordinar por varios canales a la vez, y eso
            termina generando confusión, pérdida de información y más trabajo
            del necesario.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-semibold mb-6">
              Redes actuales de coordinación
            </h3>
            <div className="flex flex-wrap gap-3">
              {currentChannels.map((channel) => (
                <span
                  key={channel}
                  className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-200"
                >
                  {channel}
                </span>
              ))}
            </div>
            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              Se mezclan mensajes de grupos, anuncios por redes sociales,
              confirmaciones por chat privado y listas manuales. Todo eso hace
              que sea difícil saber qué pasa, quién vino y qué evento está
              activo.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-8 shadow-lg shadow-orange-500/10">
            <h3 className="text-2xl font-semibold mb-6">
              Cómo propone esto la plataforma
            </h3>
            <div className="space-y-3">
              {proposedSolution.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-orange-500/20 bg-zinc-950/50 p-3"
                >
                  <span className="mt-1 text-orange-400">●</span>
                  <p className="text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
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