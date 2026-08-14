import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-zinc-800/50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Image
            src="/otro_logo2-removebg-preview.png"
            alt="Airsoft Operations"
            width={180}
            height={65}
            className="hover:opacity-90 transition-opacity"
        />

        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-300">
          <a href="#features" className="hover:text-lime-400 transition-colors">Características</a>
          <a href="#users" className="hover:text-lime-400 transition-colors">Usuarios</a>
          <a href="#why" className="hover:text-lime-400 transition-colors">¿Cómo funciona?</a>
          <a href="#screenshots" className="hover:text-lime-400 transition-colors">Demo</a>
        </div>

        <Link href="/beta/survey">
          <button className="bg-lime-500 hover:bg-lime-400 px-5 py-2.5 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20">
            Unirme a la Beta
          </button>
        </Link>

      </div>

    </nav>
  );
}