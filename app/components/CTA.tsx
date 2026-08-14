import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-lime-500 to-lime-400 text-black py-24 sm:py-32 px-6 sm:px-8">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          ¿Listo para tu próxima operación?
        </h2>

        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Únete a la beta privada de Airsoft Operations y sé de los primeros en experimentar la plataforma.
        </p>

        <Link href="/beta/survey">
          <button className="bg-black hover:bg-zinc-900 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-black/30 text-lg">
            Unirme a la Beta
          </button>
        </Link>

        <p className="mt-6 text-sm text-black/70">
          AGREGAR MENSAJE DESCRIPTIVO DEL CTA
        </p>

      </div>

    </section>
  );
}