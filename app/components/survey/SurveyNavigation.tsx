type SurveyNavigationProps = {
  showBack?: boolean;
  loading?: boolean;
  disableNext?: boolean;
  backLabel?: string;
  nextLabel?: string;
  onBack?: () => void;
  onNext: () => void;
};

export default function SurveyNavigation({
  showBack = false,
  loading = false,
  disableNext = false,
  backLabel = "Volver",
  nextLabel = "Continuar",
  onBack,
  onNext,
}: SurveyNavigationProps) {
  return (
    <div className="mt-6 flex w-full items-center justify-between gap-4">
      <div>
        {showBack ? (
          <button
            type="button"
            onClick={onBack}
            className="rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
          >
            {backLabel}
          </button>
        ) : (
          <div className="h-10" />
        )}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={disableNext || loading}
        className={`rounded-md px-5 py-2 text-sm font-semibold text-black transition duration-150 ${
          disableNext || loading
            ? "bg-zinc-600 pointer-events-none opacity-60"
            : "bg-lime-500 hover:scale-[1.02]"
        }`}
      >
        {nextLabel}
      </button>
    </div>
  );
}
