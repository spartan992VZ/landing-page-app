"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const backgroundImage = "/logoapp.png";
  const backgroundVideo = "";

  const images = [
    "/carrusel/appm1.png",
    "/carrusel/appm3.png",
    "/carrusel/appm4.png",
    "/carrusel/appm5.png",
    "/carrusel/appm6.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative min-h-[calc(100vh-72px)] text-white flex items-center pt-16 overflow-hidden">

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
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-30 scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-10 px-6 sm:px-8 w-full">

        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[0.25em] text-lime-400 font-semibold mb-2.5 text-[11px] sm:text-xs">
            Conecta. Coordina. Conquista.
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight max-w-2xl">
            La plataforma definitiva para la comunidad de Airsoft
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed max-w-md">
            Organiza operaciones, encuentra jugadores y administra equipos.
            Lleva tus partidas de Airsoft al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5">

            <Link href="/beta/survey">
              <button className="bg-lime-500 hover:bg-lime-400 px-5 py-2.5 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20 text-center text-xs sm:text-sm">
                Unirme a la Beta
              </button>
            </Link>

            <button className="border border-zinc-600 hover:border-zinc-400 px-5 py-2.5 rounded-full text-white font-medium transition-all duration-300 hover:bg-zinc-800/50 text-center text-xs sm:text-sm">
              Ver Demo
            </button>

          </div>

        </div>

        <div className="flex justify-center items-center lg:justify-end">

          <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] max-h-[580px] rounded-[28px] bg-zinc-900 border-2 border-lime-500/30 shadow-2xl shadow-lime-500/10 overflow-hidden">

            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`slide-${i}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
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
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "bg-lime-400 scale-125" : "bg-zinc-600 hover:bg-zinc-500"
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