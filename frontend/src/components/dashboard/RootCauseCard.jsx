import usePredictionStore from "../../services/store";

function RootCauseCard() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const getSeverityStyles = (severity) => {
    switch (severity) {
      case "Low":
        return {
          text: "text-green-400",
          bg: "bg-green-500/10",
        };

      case "Medium":
        return {
          text: "text-yellow-400",
          bg: "bg-yellow-500/10",
        };

      case "High":
        return {
          text: "text-orange-400",
          bg: "bg-orange-500/10",
        };

      case "Critical":
        return {
          text: "text-red-500",
          bg: "bg-red-500/10",
        };

      default:
        return {
          text: "text-white",
          bg: "bg-white/5",
        };
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
      <div className="mb-8">
        <h3 className="text-2xl font-bold">
          Root Cause Analysis
        </h3>

        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Potential factors contributing to the predicted outcome
        </p>
      </div>

      {result.root_causes.length === 0 ? (
        <div
          className="
            text-center
            py-12
            text-[var(--text-secondary)]
          "
        >
          No significant root causes detected.
        </div>
      ) : (
        <div className="grid gap-4">
          {result.root_causes.map(
            (cause, index) => {
              const severityStyle =
                getSeverityStyles(
                  cause.severity
                );

              return (
                <div
                  key={index}
                  className="
                    border border-[var(--border)]
                    rounded-xl
                    p-5
                    hover:border-slate-500
                    transition
                  "
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                      <h4 className="text-lg font-semibold">
                        {cause.factor}
                      </h4>

                      <p className="text-sm text-[var(--text-secondary)] mt-2">
                        {cause.message}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">

                      <div
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          font-medium
                          ${severityStyle.text}
                          ${severityStyle.bg}
                        `}
                      >
                        {cause.severity}
                      </div>

                      <div
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-[var(--bg-primary)]
                          text-sm
                          font-medium
                        "
                      >
                        {cause.value}
                      </div>

                    </div>

                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

export default RootCauseCard;