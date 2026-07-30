export default function Screenshots() {
  return (
    <section
      id="screenshots"
      className="bg-zinc-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          La plataforma en acción
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="h-[500px] bg-zinc-800 rounded-xl flex items-center justify-center">
            Mockup App Móvil
          </div>

          <div className="h-[500px] bg-zinc-800 rounded-xl flex items-center justify-center">
            Dashboard Organizador
          </div>

        </div>

      </div>
    </section>
  );
}