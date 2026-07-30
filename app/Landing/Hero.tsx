"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const backgroundImage = "/logoapp.png"; // Ej: "/backgrounds/hero.jpg"
  const backgroundVideo = ""; // Ej: "/backgrounds/hero.mp4"

  const images = [
    "/carrusel/appm1.png",
    //"/carrusel/appm2.png",
    "/carrusel/appm3.png",
    "/carrusel/appm4.png",
    "/carrusel/appm5.png",
    "/carrusel/appm6.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images.length]);
 
    return (
    <section className="relative min-h-screen text-white flex items-center pt-32 overflow-hidden">

      {backgroundVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : null}

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-8">

        <div>

          <p className="uppercase tracking-widest text-lime-500 mb-4">
            Conecta. Coordina. Conquista.
          </p>

          <h1 className="text-6xl font-bold mb-6">
            La plataforma definitiva para la comunidad de Airsoft
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Organiza operaciones, encuentra jugadores y administra equipos
            y lleva tus partidas de airsoft al siguiente nivel.
          </p>

          <div className="flex gap-4">

            <Link href="/beta/survey">
              <button className="bg-lime-600 px-6 py-3 rounded-lg">
                Unirme a la Beta
              </button>
            </Link>

            <button className="border border-white px-6 py-3 rounded-lg">
              Ver Demo
            </button>

          </div>

        </div>

        <div className="flex justify-center items-center">

          <div className="w-[350px] h-[700px] rounded-[40px] bg-zinc-900 border border-lime-600 relative overflow-hidden">

            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`slide-${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
            ))}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index ? "bg-lime-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}