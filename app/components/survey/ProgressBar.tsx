type ProgressBarProps = {
  step: number;
  totalSteps: number;
  showLabel?: boolean;
  animated?: boolean;
};

export default function ProgressBar({
  step,
  totalSteps,
  showLabel = true,
  animated = true,
}: ProgressBarProps) {
  const rawPercent = totalSteps > 0 ? (step / totalSteps) * 100 : 0;
  const safePercent = Math.min(Math.max(rawPercent, 0), 100);
  const percentText = `${Math.round(safePercent)}%`;
  const barClasses = animated
    ? "h-full rounded-full bg-lime-500 transition-all duration-300"
    : "h-full rounded-full bg-lime-500";

  return (
    <div className="w-full" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(safePercent)}>
      {showLabel ? (
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-lime-400">
          <span>PASO {step} DE {totalSteps}</span>
          <span>{percentText}</span>
        </div>
      ) : null}

      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <div className={barClasses} style={{ width: `${safePercent}%` }} />
      </div>
    </div>
  );
}
