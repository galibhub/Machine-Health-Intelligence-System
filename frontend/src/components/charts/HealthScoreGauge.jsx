import usePredictionStore from "../../services/store";

function HealthScoreGauge() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const score = result.health_score;

  const getHealthColor = (score) => {
    if (score >= 80) return "#22c55e";
    if (score >= 60) return "#eab308";
    if (score >= 40) return "#f97316";
    return "#ef4444";
  };

  const getHealthStatus = (score) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Warning";
    return "Critical";
  };

  const healthColor = getHealthColor(score);

  return (
    <div
      className="
        bg-[var(--bg-secondary)]
        border border-[var(--border)]
        rounded-2xl
        p-8
        text-center
      "
    >
      <p className="text-[var(--text-secondary)] mb-6">
        Health Score
      </p>

      <div className="relative w-44 h-44 mx-auto">
        <div
          className="
            absolute inset-0
            rounded-full
            border-[12px]
            flex items-center justify-center
          "
          style={{
            borderColor: healthColor,
          }}
        >
          <div>
            <div
              className="text-5xl font-bold"
              style={{
                color: healthColor,
              }}
            >
              {score}
            </div>

            <div
              className="text-sm mt-2 font-medium"
              style={{
                color: healthColor,
              }}
            >
              {getHealthStatus(score)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-[var(--text-secondary)]">
          <span>Critical</span>
          <span>Excellent</span>
        </div>

        <div className="mt-2 h-2 rounded-full bg-[var(--bg-primary)] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${score}%`,
              backgroundColor: healthColor,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HealthScoreGauge;