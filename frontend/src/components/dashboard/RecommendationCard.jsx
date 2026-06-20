import usePredictionStore from "../../services/store";

function RecommendationCard() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Immediate":
        return "text-red-500";

      case "High":
        return "text-orange-400";

      case "Medium":
        return "text-yellow-400";

      default:
        return "text-green-400";
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
        Recommendations
      </h3>

      {result.recommendations.length === 0 ? (
        <div
          className="
            text-center
            py-10
            text-[var(--text-secondary)]
          "
        >
          No recommendations available.
        </div>
      ) : (
        <div className="space-y-4">
          {result.recommendations.map(
            (item, index) => (
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
                <div className="flex items-center justify-between mb-3">
                  <h4
                    className={`font-semibold ${getPriorityColor(
                      item.priority
                    )}`}
                  >
                    {item.priority} Priority
                  </h4>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.action}
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default RecommendationCard;