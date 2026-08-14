type SurveyHeaderProps = {
  title: string;
  subtitle?: string;
  estimatedTime?: string;
};

export default function SurveyHeader({
  title,
  subtitle,
  estimatedTime,
}: SurveyHeaderProps) {
  return (
    <div className="mb-8 text-white">
      <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-zinc-400">{subtitle}</p> : null}
      {estimatedTime ? (
        <p className="mt-3 text-sm text-zinc-500">⏱ Solo te llevará aproximadamente {estimatedTime}.</p>
      ) : null}
    </div>
  );
}
