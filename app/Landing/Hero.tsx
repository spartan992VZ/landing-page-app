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
    <section className="relative min-h-[calc(100vh-80px)] text-white flex items-center pt-20 overflow-hidden">

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

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 px-6 sm:px-8 w-full">

        <div className="flex flex-col justify-center">

          <p className="uppercase tracking-[0.3em] text-lime-400 font-semibold mb-3 text-xs sm:text-sm">
            Conecta. Coordina. Conquista.
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            La plataforma definitiva para la comunidad de Airsoft
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 mb-6 leading-relaxed max-w-lg">
            Organiza operaciones, encuentra jugadores y administra equipos.
            Lleva tus partidas de Airsoft al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">

            <Link href="/beta/survey">
              <button className="bg-lime-500 hover:bg-lime-400 px-6 py-3 rounded-full text-black font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20 text-center text-sm sm:text-base">
                Unirme a la Beta
              </button>
            </Link>

            <button className="border border-zinc-600 hover:border-zinc-400 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-zinc-800/50 text-center text-sm sm:text-base">
              Ver Demo
            </button>

          </div>

        </div>

        <div className="flex justify-center items-center lg:justify-end">

          <div className="relative w-[300px] sm:w-[350px] h-[500px] sm:h-[580px] lg:h-[65vh] max-h-[600px] rounded-[32px] bg-zinc-900 border-2 border-lime-500/30 shadow-2xl shadow-lime-500/10 overflow-hidden">

            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`slide-${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
            ))}

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
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