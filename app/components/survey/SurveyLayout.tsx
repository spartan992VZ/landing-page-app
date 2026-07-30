type SurveyLayoutProps = {
  title: string;
  subtitle: string;
  step: number;
  totalSteps: number;
  children: React.ReactNode;
};

export default function SurveyLayout({
  title,
  subtitle,
  step,
  totalSteps,
  children,
}: SurveyLayoutProps) {

    const progress = (step / totalSteps) * 100;

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-4xl">

        {/* Encabezado */}
        <div className="text-center mb-12">

          <p className="uppercase tracking-widest text-lime-500">
            Paso {step} de {totalSteps}
          </p>

          <h1 className="text-4xl font-bold mt-4">
            {title}
          </h1>

          <p className="text-gray-400 mt-4">
            {subtitle}
          </p>

        </div>

        {/* Barra de progreso */}

        <div className="w-full h-2 rounded-full bg-zinc-800 mb-12">

          <div
            className="h-full rounded-full bg-lime-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        {/* Contenido */}

        <div>

          {children}

        </div>

      </div>

    </section>
  );
}