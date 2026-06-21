// import usePredictionStore from "../../services/store";

// function RecommendationCard() {
//   const result = usePredictionStore(
//     (state) => state.result
//   );

//   if (!result) return null;

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "Immediate":
//         return "text-red-500";

//       case "High":
//         return "text-orange-400";

//       case "Medium":
//         return "text-yellow-400";

//       default:
//         return "text-green-400";
//     }
//   };

//   return (
//     <div
//       className="
//         bg-[var(--bg-secondary)]
//         border border-[var(--border)]
//         rounded-2xl
//         p-6
//       "
//     >
//       <h3 className="text-2xl font-bold mb-6">
//         Recommendations
//       </h3>

//       {result.recommendations.length === 0 ? (
//         <div
//           className="
//             text-center
//             py-10
//             text-[var(--text-secondary)]
//           "
//         >
//           No recommendations available.
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {result.recommendations.map(
//             (item, index) => (
//               <div
//                 key={index}
//                 className="
//                   border border-[var(--border)]
//                   rounded-xl
//                   p-4
//                   hover:border-slate-600
//                   transition
//                 "
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <h4
//                     className={`font-semibold ${getPriorityColor(
//                       item.priority
//                     )}`}
//                   >
//                     {item.priority} Priority
//                   </h4>
//                 </div>

//                 <p className="text-[var(--text-secondary)] leading-relaxed">
//                   {item.action}
//                 </p>
//               </div>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecommendationCard;

import usePredictionStore from "../../services/store";

function RecommendationCard() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const getPriorityConfig = (priority) => {
    switch (priority) {
      case "Immediate":
        return {
          color: "text-red-400",
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          icon: "🚨",
        };

      case "High":
        return {
          color: "text-orange-400",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
          icon: "⚠️",
        };

      case "Medium":
        return {
          color: "text-yellow-400",
          bg: "bg-yellow-500/10",
          border: "border-yellow-500/20",
          icon: "🛠️",
        };

      default:
        return {
          color: "text-emerald-400",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/20",
          icon: "✅",
        };
    }
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[var(--bg-secondary)]
        border border-white/10
        rounded-3xl
        p-8
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -bottom-20
          -right-20
          w-64
          h-64
          bg-cyan-500/10
          blur-3xl
          rounded-full
        "
      />

      {/* Header */}

      <div className="relative z-10 mb-8">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-2xl font-bold">
              Maintenance Action Center
            </h3>

            <p className="text-slate-400 mt-1">
              AI-generated recommendations based on
              model prediction and engineering analysis
            </p>
          </div>

          <div
            className="
              px-3 py-2
              rounded-full
              bg-cyan-500/10
              border border-cyan-500/20
              text-cyan-400
              text-xs
              font-semibold
            "
          >
            {result.recommendations.length} Actions
          </div>

        </div>

      </div>

      {/* Empty State */}

      {result.recommendations.length === 0 ? (

        <div
          className="
            flex
            items-center
            justify-center
            py-16
            text-center
          "
        >
          <div>
            <div className="text-5xl mb-4">
              ✅
            </div>

            <h4 className="text-xl font-bold">
              No Action Required
            </h4>

            <p className="text-slate-400 mt-2">
              Machine is operating within
              acceptable limits.
            </p>
          </div>
        </div>

      ) : (

        <div className="space-y-4 relative z-10">

          {result.recommendations.map(
            (item, index) => {

              const config =
                getPriorityConfig(
                  item.priority
                );

              return (
                <div
                  key={index}
                  className={`
                    border
                    rounded-2xl
                    p-5
                    transition-all
                    hover:translate-x-1
                    hover:border-cyan-500/20
                    ${config.border}
                  `}
                >
                  <div className="flex items-start gap-4">

                    {/* Icon */}

                    <div
                      className={`
                        w-12
                        h-12
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        text-xl
                        shrink-0
                        ${config.bg}
                      `}
                    >
                      {config.icon}
                    </div>

                    {/* Content */}

                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-3 mb-3">

                        <span
                          className={`
                            px-3 py-1
                            rounded-full
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            ${config.color}
                            ${config.bg}
                          `}
                        >
                          {item.priority}
                        </span>

                      </div>

                      <p className="text-slate-300 leading-relaxed">
                        {item.action}
                      </p>

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

export default RecommendationCard;