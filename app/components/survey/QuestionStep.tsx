import type { ComponentType } from "react";
import ProgressBar from "./ProgressBar";
import SurveyHeader from "./SurveyHeader";
import SurveyNavigation from "./SurveyNavigation";
import OptionCard from "./OptionCard";

export interface QuestionOption {
  id: string;
  title: string;
  description?: string;
  value: string;
  icon?: ComponentType<{ size?: number; className?: string }>;
  disabled?: boolean;
}

export type SelectionMode = "single" | "multiple";

export interface QuestionStepProps {
  step: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
  estimatedTime?: string;
  options: QuestionOption[];
  selectedValue?: string;
  selectedValues?: string[];
  selectionMode?: SelectionMode;
  maxSelections?: number;
  showBack?: boolean;
  loading?: boolean;
  nextLabel?: string;
  backLabel?: string;
  onSelect?: (value: string) => void;
  onSelectionChange?: (values: string[]) => void;
  onNext: () => void;
  onBack?: () => void;
}

export default function QuestionStep({
  step,
  totalSteps,
  title,
  subtitle,
  estimatedTime,
  options,
  selectedValue,
  selectedValues = [],
  selectionMode = "single",
  maxSelections,
  showBack = false,
  loading = false,
  nextLabel = "Continuar",
  backLabel = "Volver",
  onSelect,
  onSelectionChange,
  onNext,
  onBack,
}: QuestionStepProps) {
  const isMultiple = selectionMode === "multiple";

  const handleOptionClick = (option: QuestionOption) => {
    if (option.disabled) return;

    if (isMultiple) {
      const isSelected = selectedValues.includes(option.value);
      let newValues: string[];

      if (isSelected) {
        newValues = selectedValues.filter((v) => v !== option.value);
      } else {
        if (maxSelections && selectedValues.length >= maxSelections) {
          return;
        }
        newValues = [...selectedValues, option.value];
      }

      onSelectionChange?.(newValues);
    } else {
      onSelect?.(option.value);
    }
  };

  const isOptionSelected = (option: QuestionOption) => {
    if (isMultiple) {
      return selectedValues.includes(option.value);
    }
    return selectedValue === option.value;
  };

  const isNextDisabled = () => {
    if (isMultiple) {
      return selectedValues.length === 0;
    }
    return !selectedValue;
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:py-8">
      <ProgressBar step={step} totalSteps={totalSteps} />

      <SurveyHeader title={title} subtitle={subtitle} estimatedTime={estimatedTime} />

      {isMultiple && maxSelections && (
        <p className="mt-2 text-sm text-zinc-500">
          Puedes seleccionar hasta {maxSelections} opciones.
        </p>
      )}

      <div
        role={isMultiple ? "group" : "radiogroup"}
        aria-label={title}
        aria-multiselectable={isMultiple}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            selected={isOptionSelected(option)}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>

      <SurveyNavigation
        showBack={showBack}
        loading={loading}
        disableNext={isNextDisabled()}
        backLabel={backLabel}
        nextLabel={nextLabel}
        onBack={onBack}
        onNext={onNext}
      />
    </div>
  );
}
