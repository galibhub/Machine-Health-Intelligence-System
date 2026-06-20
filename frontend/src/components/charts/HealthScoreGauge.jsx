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

  const healthColor =
    getHealthColor(score);

  const radius = 65;
  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (score / 100) *
      circumference;

  return (
    <div
      className="
        bg-[var(--bg-secondary)]
        border border-white/10
        rounded-3xl
        p-8
      "
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold">
          Health Score
        </h3>

        <p className="text-slate-400 mt-1">
          Overall machine condition
        </p>
      </div>

      <div className="flex justify-center">

        <div className="relative">

          <svg
            width="170"
            height="170"
            className="-rotate-90"
          >
            {/* Background Ring */}

            <circle
              cx="85"
              cy="85"
              r={radius}
              fill="none"
              stroke="#1e293b"
              strokeWidth="12"
            />

            {/* Progress Ring */}

            <circle
              cx="85"
              cy="85"
              r={radius}
              fill="none"
              stroke={healthColor}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={
                circumference
              }
              strokeDashoffset={offset}
              style={{
                transition:
                  "stroke-dashoffset 1s ease",
                filter:
                  "drop-shadow(0 0 10px rgba(0,212,255,.35))",
              }}
            />
          </svg>

          {/* Center Content */}

          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <div
              className="text-5xl font-black"
              style={{
                color: healthColor,
              }}
            >
              {score}
            </div>

            <div
              className="text-sm font-semibold mt-2"
              style={{
                color: healthColor,
              }}
            >
              {getHealthStatus(score)}
            </div>
          </div>

        </div>

      </div>

      {/* Footer Stats */}

      <div
        className="
          mt-8
          pt-6
          border-t
          border-white/10
          grid
          grid-cols-2
          gap-4
        "
      >
        <div>
          <p className="text-xs text-slate-500 uppercase">
            Condition
          </p>

          <p
            className="font-bold mt-1"
            style={{
              color: healthColor,
            }}
          >
            {getHealthStatus(score)}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500 uppercase">
            Score
          </p>

          <p className="font-bold mt-1">
            {score}/100
          </p>
        </div>
      </div>
    </div>
  );
}

export default HealthScoreGauge;