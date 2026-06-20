import usePredictionStore from "../../services/store";

function RootCauseCard() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const getSeverityColor = (severity) => {
    switch (severity) {
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
    <div
      className="
        bg-[var(--bg-secondary)]
        border border-[var(--border)]
        rounded-2xl
        p-6
      "
    >
      <h3 className="text-2xl font-bold mb-6">
        Root Cause Analysis
      </h3>

      {result.root_causes.length === 0 ? (
        <div
          className="
            text-center
            py-10
            text-[var(--text-secondary)]
          "
        >
          No significant root causes detected.
        </div>
      ) : (
        <div className="space-y-4">
          {result.root_causes.map(
            (cause, index) => (
              <div
                key={index}
                className="
                  border border-[var(--border)]
                  rounded-xl
                  p-4
                  hover:border-slate-600
                  transition
                "
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">
                      {cause.factor}
                    </h4>

                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      Current Value:{" "}
                      <span className="font-medium text-white">
                        {cause.value}
                      </span>
                    </p>
                  </div>

                  <span
                    className={`font-semibold ${getSeverityColor(
                      cause.severity
                    )}`}
                  >
                    {cause.severity}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {cause.message}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default RootCauseCard;