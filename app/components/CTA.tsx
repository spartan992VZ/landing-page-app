import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-lime-500 to-lime-400 text-black py-16 sm:py-20 px-6 sm:px-8">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          ¿Listo para tu próxima operación?
        </h2>

        <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          Únete a la beta privada de Airsoft Operations y sé de los primeros en experimentar la plataforma.
        </p>

        <Link href="/beta/survey">
          <button className="bg-black hover:bg-zinc-900 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-black/30 text-sm sm:text-base">
            Unirme a la Beta
          </button>
        </Link>

        <p className="mt-4 text-xs text-black/70">
          AGREGAR MENSAJE DESCRIPTIVO DEL CTA
        </p>

      </div>

    </section>
  );
}