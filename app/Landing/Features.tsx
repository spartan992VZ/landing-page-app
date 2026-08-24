'use client';

import { useState } from 'react';
import { Calendar, Star, Users, MessageSquare, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'events', label: 'Eventos y Partidas', icon: Calendar },
  { id: 'fields', label: 'Campos de Juego', icon: Star },
  { id: 'teams', label: 'Gestión de Equipos', icon: Users },
  { id: 'community', label: 'Comunidad y Chat', icon: MessageSquare },
];

const features = {
  events: {
    badge: '01 / 04 - EVENTOS Y PARTIDAS',
    title: 'Descubre y únete a partidas cerca de ti',
    description: 'Encuentra operaciones, eventos y partidas organizadas en tu zona. Inscribirte nunca fue tan fácil.',
    points: [
      'Calendario completo y actualizado de eventos',
      'Filtrado por distancia, tipo de juego y nivel',
      'Inscripciones directas con confirmación instantánea',
      'Notificaciones de nuevos eventos cercanos',
    ],
    mockup: {
      status: 'DISPONIBLE ESTE FIN DE SEMANA',
      name: 'Operación Urban CQB',
      tags: ['CQB', 'Nocturno', '20 Jugadores'],
      location: 'Zona Norte - Campo Alpha',
    },
  },
  fields: {
    badge: '02 / 04 - CAMPOS DE JUEGO',
    title: 'Encuentra y reserva el campo ideal',
    description: 'Explora diferentes campos de juego, consulta disponibilidad y encuentra el perfecto para tu estilo.',
    points: [
      'Consulta disponibilidad en tiempo real',
      'Fichas técnicas con reglas, terreno y servicios',
      'Ubicación GPS y cómo llegar sin rodeos',
      'Reservas directas con confirmación',
    ],
    mockup: {
      status: 'DISPONIBLE ESTE FIN DE SEMANA',
      name: 'Campo CQB Táctico Alpha',
      tags: ['Techado', 'Terreno Mixto', 'Alquiler de Gear'],
      location: 'Zona Oeste - Complejo Beta',
    },
  },
  teams: {
    badge: '03 / 04 - GESTIÓN DE EQUIPOS',
    title: 'Organiza tu escuadrón como un profesional',
    description: 'Crea equipos, asigna roles y mantén a tu escuadrón siempre sincronizado y listo para la misión.',
    points: [
      'Creación de escuadrones con roles personalizados',
      'Gestión de jugadores y estadísticas por equipo',
      'Comunicación interna y tácticas compartidas',
      'Historial de partidas y rendimiento conjunto',
    ],
    mockup: {
      status: 'ACTIVO - 12 MIEMBROS',
      name: 'Escuadrón Fantasma',
      tags: ['Competitivo', 'Táctico', 'Semanal'],
      location: 'Líder: Comando Alpha',
    },
  },
  community: {
    badge: '04 / 04 - COMUNIDAD Y CHAT',
    title: 'Conecta con la comunidad de Airsoft',
    description: 'Chat por evento, foros y comunicación centralizada. Mantente al tanto de todo lo que pasa.',
    points: [
      'Chat organizado por cada evento/partida',
      'Foros de discusión y tácticas',
      'Intercambio de experiencias y consejos',
      'Red social exclusiva de la comunidad',
    ],
    mockup: {
      status: '24 MIEMBROS ACTIVOS',
      name: 'Chat: Operación Delta',
      tags: ['En vivo', 'Coordinación', 'Tácticas'],
      location: 'Evento: CQB Nocturno',
    },
  },
};

export default function Features() {
  const [activeTab, setActiveTab] = useState('events');

  const currentFeature = features[activeTab as keyof typeof features];

  const handlePrev = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  };

  return (
    <section id="features" className="bg-[#0d0d0d] text-white py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#82c91e] font-semibold uppercase tracking-[0.25em] text-xs mb-3">
            CARACTERÍSTICAS
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Todo lo que necesitas para tus operaciones
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Herramientas diseñadas específicamente para la comunidad de Airsoft.
          </p>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-2 md:justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1f1f1f] border border-[#82c91e]/50 text-white'
                    : 'bg-neutral-900/50 border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#82c91e]' : ''}`} />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 transition-all duration-300">
            <p className="text-[#82c91e] font-semibold uppercase tracking-[0.2em] text-xs mb-4">
              {currentFeature.badge}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {currentFeature.title}
            </h3>
            <p className="text-neutral-300 text-base leading-relaxed mb-6">
              {currentFeature.description}
            </p>
            <ul className="space-y-3 mb-8">
              {currentFeature.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#82c91e] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-neutral-700 bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-neutral-700 bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-neutral-800 bg-[#141414] rounded-xl overflow-hidden shadow-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-[#82c91e]/20 text-[#82c91e] text-xs font-semibold rounded-full">
                  {currentFeature.mockup.status}
                </span>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#82c91e]/20 to-transparent flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#82c91e]" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {currentFeature.mockup.name}
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {currentFeature.mockup.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{currentFeature.mockup.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
