import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
              i + 1 <= currentStep
                ? "bg-auxano-primary text-white"
                : "bg-auxano-card text-gray-500 border border-auxano-border"
            )}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div
              className={cn(
                "w-8 h-0.5 transition-colors",
                i + 1 < currentStep ? "bg-auxano-primary" : "bg-auxano-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
