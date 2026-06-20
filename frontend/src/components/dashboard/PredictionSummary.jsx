import usePredictionStore from "../../services/store";

function PredictionSummary() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const riskColor = {
    Low: "text-green-400",
    Medium: "text-yellow-400",
    High: "text-orange-400",
    Critical: "text-red-500",
  };

  const predictionColor =
    result.prediction === "Failure"
      ? "text-red-500"
      : "text-green-400";

  return (
    <div
      className="
        bg-[var(--bg-secondary)]
        border border-[var(--border)]
        rounded-2xl
        p-6
      "
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold">
            Machine Health Overview
          </h3>

          <p className="text-[var(--text-secondary)] mt-1">
            AI-powered machine condition assessment
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            Prediction
          </p>

          <h4
            className={`text-2xl font-bold ${predictionColor}`}
          >
            {result.prediction}
          </h4>
        </div>

        <div>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            Risk Level
          </p>

          <h4
            className={`text-2xl font-bold ${
              riskColor[result.risk_level]
            }`}
          >
            {result.risk_level}
          </h4>
        </div>

        <div>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            Probability
          </p>

          <h4 className="text-2xl font-bold">
            {result.probability.toFixed(2)}%
          </h4>
        </div>

        <div>
          <p className="text-sm text-[var(--text-secondary)] mb-2">
            Health Score
          </p>

          <h4 className="text-2xl font-bold">
            {result.health_score}
          </h4>
        </div>

      </div>
    </div>
  );
}

export default PredictionSummary;