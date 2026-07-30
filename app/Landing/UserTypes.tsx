export default function UserTypes() {
  return (
    <section
      id="users"
      className="bg-black text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Diseñado para todos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-zinc-900 rounded-xl p-8">

            <h3 className="text-3xl font-bold mb-6">
              Jugadores
            </h3>

            <ul className="space-y-4">
              <li>✓ Buscar eventos</li>
              <li>✓ Unirse a equipos</li>
              <li>✓ Ver estadísticas</li>
              <li>✓ Chat con jugadores</li>
            </ul>

          </div>

          <div className="bg-zinc-900 rounded-xl p-8">

            <h3 className="text-3xl font-bold mb-6">
              Organizadores
            </h3>

            <ul className="space-y-4">
              <li>✓ Crear eventos</li>
              <li>✓ Gestionar inscripciones</li>
              <li>✓ Administrar campos</li>
              <li>✓ Analíticas y reportes</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}