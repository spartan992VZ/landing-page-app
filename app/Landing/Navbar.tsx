import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <Image
            src="/otro_logo2-removebg-preview.png"
            alt="Airsoft"
            width={220}
            height={80}
        />

        <div className="hidden md:flex gap-8 text-white">
          <a href="#features">Características</a>
          <a href="#users">Usuarios</a>
          <a href="#why">¿Como funciona?</a>
          <a href="#screenshots">FQA</a>
        </div>

        <Link href="/beta/survey">
          <button className="bg-lime-600 px-4 py-2 rounded-lg text-white">
            Unirme a la Beta
          </button>
        </Link>

      </div>

    </nav>
  );
}