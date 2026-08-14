import type { ComponentType } from "react";

/**
 * OptionCard: small reusable selectable card.
 * - Controlled component (no internal state)
 * - Accessible (role, aria-checked, focus-visible)
 */

type OptionCardOption = {
  title: string;
  description?: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
  disabled?: boolean;
};

type BaseOptionCardProps = {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  iconSize?: number;
  role?: string;
};

export type OptionCardProps =
  | (BaseOptionCardProps & {
      option: OptionCardOption;
      title?: never;
      description?: never;
      icon?: never;
    })
  | (BaseOptionCardProps & {
      title: string;
      description?: string;
      icon?: ComponentType<{ size?: number; className?: string }>;
      option?: never;
    });

const baseStyles = "w-full rounded-2xl border p-6 text-left transition-transform duration-200 focus:outline-none";
const defaultStyles = "border-zinc-800 bg-zinc-900";
const selectedStyles = "border-lime-500 bg-lime-500/20 scale-[1.02] shadow-[0_8px_30px_rgba(34,197,94,0.06)]";
const hoverStyles = "hover:scale-[1.02] hover:border-lime-500 hover:shadow-lg hover:shadow-lime-500/20";

export default function OptionCard({
  option,
  title,
  description,
  icon: Icon,
  selected = false,
  onClick,
  className,
  disabled = false,
  iconSize = 36,
  role = "radio",
}: OptionCardProps) {
  const resolved = option
    ? {
        title: option.title,
        description: option.description,
        icon: option.icon,
        disabled: option.disabled,
      }
    : { title, description, icon: Icon, disabled };

  const isDisabled = option?.disabled ?? disabled;
  const ResolvedIcon = resolved.icon;

  const merged = [
    baseStyles,
    "text-left",
    "focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900",
    !isDisabled ? hoverStyles : "",
    selected ? selectedStyles : defaultStyles,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      onClick={onClick}
      className={merged}
    >
      {ResolvedIcon ? <ResolvedIcon size={iconSize} className="text-lime-500 mb-5" /> : null}

      <h3 className="text-xl font-semibold text-white mb-2">{resolved.title}</h3>

      {resolved.description ? <p className="mt-0 text-zinc-400">{resolved.description}</p> : null}
    </button>
  );
}

