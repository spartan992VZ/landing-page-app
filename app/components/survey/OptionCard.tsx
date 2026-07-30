import { LucideIcon } from "lucide-react";

type OptionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  title,
  description,
  icon: Icon,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        border
        p-6
        text-left
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:border-lime-500
        hover:shadow-lg
        hover:shadow-lime-500/20

        ${
          selected
            ? "border-lime-500 bg-lime-500/10"
            : "border-zinc-800 bg-zinc-900"
        }
      `}
    >
      <Icon
        size={32}
        className="text-lime-500 mb-4"
      />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-gray-400">
        {description}
      </p>
    </button>
  );
}