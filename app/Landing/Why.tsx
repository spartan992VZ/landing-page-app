import { Calendar, MessageSquare, Users, Star, Wallet, BarChart3, ArrowRight, ChevronDown } from 'lucide-react';

export default function Why() {
  const beforeItems = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
        </svg>
      ),
      title: 'WhatsApp',
      description: 'Mensajes que se pierden, info repetida, grupos saturados.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F58529" />
              <stop offset="25%" stopColor="#DD2A7B" />
              <stop offset="50%" stopColor="#8134AF" />
              <stop offset="75%" stopColor="#515BD4" />
            </linearGradient>
          </defs>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient)"/>
        </svg>
      ),
      title: 'Instagram / Facebook',
      description: 'Te enterás tarde o solo si ves la publicación a tiempo.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
        </svg>
      ),
      title: 'Google Maps',
      description: 'Buscás la ubicación del campo cada vez.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.17 3.25Q21.5 3.25 21.76 3.5 22 3.74 22 4.08V19.92Q22 20.26 21.76 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.24 20.5 7 20.26 7 19.92V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V4.08Q2 3.74 2.24 3.5 2.5 3.25 2.83 3.25H21.17M7 15.92V8.08H3.83V15.92H7M21.17 4.08H8V19.92H21.17V4.08Z" fill="#107C41"/>
        </svg>
      ),
      title: 'Google Forms / Excel',
      description: 'Listas de asistencia manuales y datos desordenados.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 6h14v2H5V6m0 5h14v2H5v-2m0 5h14v2H5v-2M3 4v16h18V4H3m16 14H5V6h14v12z" fill="#757575"/>
        </svg>
      ),
      title: 'Pagos y transferencias',
      description: 'Confirmaciones manuales, capturas y confusión.',
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 11H3.5C2.67 11 2 11.67 2 12.5v9C2 22.33 2.67 23 3.5 23h17c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-1.5 9H5v-7h14v7zM12 1L3 5v6h2V6.55l7 2.92 7-2.92V11h2V5L12 1z" fill="#9E9E9E"/>
        </svg>
      ),
      title: 'Y más...',
      description: 'Múltiples apps, cero conexión entre ellas.',
    },
  ];

  const afterItems = [
    {
      icon: <Calendar className="w-6 h-6 text-[#82c91e]" />,
      title: 'Eventos',
      description: 'Calendario completo y siempre actualizado de partidas.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#82c91e]" />,
      title: 'Chat por evento',
      description: 'Comunicación organizada y enfocada por partida.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#82c91e]" />,
      title: 'Equipos',
      description: 'Gestioná tu escuadrón y jugadores confirmados.',
    },
    {
      icon: <Star className="w-6 h-6 text-[#82c91e]" />,
      title: 'Campos',
      description: 'Información, ubicación, reservas y disponibilidad.',
    },
    {
      icon: <Wallet className="w-6 h-6 text-[#82c91e]" />,
      title: 'Pagos y confirmaciones',
      description: 'Todo claro, seguro y automatizado.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#82c91e]" />,
      title: 'Historial y estadísticas',
      description: 'Recordá, medí y mejorá el rendimiento de tu juego.',
    },
  ];

  return (
    <section id="why" className="bg-[#0d0d0d] text-white py-16 sm:py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#82c91e] font-semibold uppercase tracking-[0.25em] text-xs mb-3">
            DEL CAOS AL ORDEN
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Te resulta familiar?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Así organizamos hoy... y así lo vamos a cambiar.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-2xl border border-neutral-800 bg-[#161616] p-6 sm:p-8">
            <h3 className="text-white font-bold uppercase text-sm mb-6">
              HOY: TODO DISPERSO Y DESORDENADO
            </h3>
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-[#82c91e] flex items-center justify-center shadow-lg shadow-[#82c91e]/30">
              <ArrowRight className="w-6 h-6 text-black" />
            </div>
          </div>

          <div className="md:hidden flex justify-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#82c91e] flex items-center justify-center">
              <ChevronDown className="w-5 h-5 text-black" />
            </div>
          </div>

          <div className="rounded-2xl border border-[#82c91e]/30 bg-[#161616] p-6 sm:p-8">
            <h3 className="text-[#82c91e] font-bold uppercase text-sm mb-6">
              MAÑANA: TODO EN UN SOLO LUGAR
            </h3>
            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}