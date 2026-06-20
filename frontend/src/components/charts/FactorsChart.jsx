import usePredictionStore from "../../services/store";

function FactorsChart() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  if (
    !result.model_explanations ||
    result.model_explanations.length === 0
  ) {
    return (
      <div
        className="
          bg-[var(--bg-secondary)]
          border border-[var(--border)]
          rounded-2xl
          p-6
        "
      >
        <h3 className="text-xl font-bold">
          Model Explanations
        </h3>

        <p className="text-[var(--text-secondary)] mt-4">
          No model explanations available.
        </p>
      </div>
    );
  }

  const factors = [...result.model_explanations]
    .map((item) => ({
      feature: item.feature
        .replaceAll("_", " ")
        .replace("Air_temperature_K", "Air Temperature")
        .replace("Process_temperature_K", "Process Temperature")
        .replace("Rotational_speed_rpm", "Rotational Speed")
        .replace("Tool_wear_min", "Tool Wear"),
      contribution: Math.abs(item.contribution),
    }))
    .sort(
      (a, b) =>
        b.contribution - a.contribution
    )
    .slice(0, 5);

  const maxValue = factors[0].contribution;

  return (
    <div
      className="
        bg-[var(--bg-secondary)]
        border border-[var(--border)]
        rounded-2xl
        p-6
      "
    >
      <div className="mb-8">
        <h3 className="text-xl font-bold">
          AI Model Insights
        </h3>

        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Features that most influenced this prediction
        </p>
      </div>

      <div className="space-y-5">
        {factors.map((factor, index) => {
          const percentage =
            (factor.contribution /
              maxValue) *
            100;

          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  {factor.feature}
                </span>

                <span className="text-sm text-[var(--text-secondary)]">
                  Impact Rank #{index + 1}
                </span>
              </div>

              <div className="h-2 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${percentage}%`,
                    background:
                      index === 0
                        ? "#3b82f6"
                        : index === 1
                        ? "#60a5fa"
                        : index === 2
                        ? "#93c5fd"
                        : "#bfdbfe",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-secondary)]">
          Higher-ranked factors had a greater influence on the model's prediction.
        </p>
      </div>
    </div>
  );
}

export default FactorsChart;