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
        p-6
      "
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold">
          Health Score
        </h3>

        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Overall machine condition
        </p>
      </div>

      <div className="flex flex-col items-center">

        <div
          className="
            w-36
            h-36
            rounded-full
            border-[10px]
            flex items-center justify-center
          "
          style={{
            borderColor: healthColor,
          }}
        >
          <div className="text-center">
            <div
              className="text-4xl font-bold"
              style={{
                color: healthColor,
              }}
            >
              {score}
            </div>

            <div
              className="text-xs font-medium mt-1"
              style={{
                color: healthColor,
              }}
            >
              {getHealthStatus(score)}
            </div>
          </div>
        </div>

        <div className="w-full mt-6">

          <div className="flex justify-between text-xs text-[var(--text-secondary)]">
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
    </div>
  );
}

export default HealthScoreGauge;