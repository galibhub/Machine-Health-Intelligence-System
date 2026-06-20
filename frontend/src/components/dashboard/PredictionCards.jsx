import usePredictionStore from "../../services/store";

function PredictionCards() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const getRiskColor = (risk) => {
    switch (risk) {
      case "Low":
        return "text-green-400";

      case "Medium":
        return "text-yellow-400";

      case "High":
        return "text-orange-400";

      case "Critical":
        return "text-red-500";

      default:
        return "text-white";
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Prediction */}
      <div
        className="
          bg-[var(--bg-secondary)]
          border border-[var(--border)]
          rounded-2xl
          p-6
        "
      >
        <p className="text-[var(--text-secondary)]">
          Prediction
        </p>

        <h3
          className={`text-3xl font-bold mt-2 ${
            result.prediction === "Failure"
              ? "text-red-500"
              : "text-green-400"
          }`}
        >
          {result.prediction}
        </h3>
      </div>

      {/* Probability */}
      <div
        className="
          bg-[var(--bg-secondary)]
          border border-[var(--border)]
          rounded-2xl
          p-6
        "
      >
        <p className="text-[var(--text-secondary)]">
          Probability
        </p>

        <h3 className="text-3xl font-bold mt-2">
          {result.probability.toFixed(2)}%
        </h3>
      </div>

      {/* Risk Level */}
      <div
        className="
          bg-[var(--bg-secondary)]
          border border-[var(--border)]
          rounded-2xl
          p-6
        "
      >
        <p className="text-[var(--text-secondary)]">
          Risk Level
        </p>

        <h3
          className={`text-3xl font-bold mt-2 ${getRiskColor(
            result.risk_level
          )}`}
        >
          {result.risk_level}
        </h3>
      </div>

      {/* Health Score */}
      <div
        className="
          bg-[var(--bg-secondary)]
          border border-[var(--border)]
          rounded-2xl
          p-6
        "
      >
        <p className="text-[var(--text-secondary)]">
          Health Score
        </p>

        <h3 className="text-3xl font-bold mt-2">
          {result.health_score}
        </h3>
      </div>
    </div>
  );
}

export default PredictionCards;