import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">

        <h1 className="text-5xl font-bold">
          Airsoft Operations
        </h1>

        <p className="mt-6 text-xl max-w-2xl">
          Encuentra partidas, organiza equipos y coordina
          operaciones de airsoft desde una única plataforma.
        </p>

        <button
          className="
            mt-8
            px-6
            py-3
            rounded-lg
            font-semibold
            bg-black
            text-white
          "
        >
          Unirme a la Beta
        </button>

      </section>

    </main>
  );
}