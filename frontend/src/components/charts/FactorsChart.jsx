// import usePredictionStore from "../../services/store";

// function FactorsChart() {
//   const result = usePredictionStore(
//     (state) => state.result
//   );

//   if (!result) return null;

//   if (
//     !result.model_explanations ||
//     result.model_explanations.length === 0
//   ) {
//     return (
//       <div
//         className="
//           bg-[var(--bg-secondary)]
//           border border-[var(--border)]
//           rounded-2xl
//           p-6
//         "
//       >
//         <h3 className="text-xl font-bold">
//           Model Explanations
//         </h3>

//         <p className="text-[var(--text-secondary)] mt-4">
//           No model explanations available.
//         </p>
//       </div>
//     );
//   }

//   const factors = [...result.model_explanations]
//     .map((item) => ({
//       feature: item.feature
//         .replaceAll("_", " ")
//         .replace("Air_temperature_K", "Air Temperature")
//         .replace("Process_temperature_K", "Process Temperature")
//         .replace("Rotational_speed_rpm", "Rotational Speed")
//         .replace("Tool_wear_min", "Tool Wear"),
//       contribution: Math.abs(item.contribution),
//     }))
//     .sort(
//       (a, b) =>
//         b.contribution - a.contribution
//     )
//     .slice(0, 5);

//   const maxValue = factors[0].contribution;

//   return (
//    <div
//   className="
//     bg-[var(--bg-secondary)]
//     border border-white/10
//     rounded-3xl
//     p-6
//     h-full
//   "
// >
//       <div className="mb-8">
//         <h3 className="text-xl font-bold">
//           AI Model Insights
//         </h3>

//         <p className="text-sm text-[var(--text-secondary)] mt-1">
//           Features that most influenced this prediction
//         </p>
//       </div>

//       <div className="space-y-5">
//         {factors.map((factor, index) => {
//           const percentage =
//             (factor.contribution /
//               maxValue) *
//             100;

//           return (
//             <div key={index}>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-medium">
//                   {factor.feature}
//                 </span>

//                 <span className="text-sm text-[var(--text-secondary)]">
//                   Impact Rank #{index + 1}
//                 </span>
//               </div>

//               <div className="h-2 bg-[var(--bg-primary)] rounded-full overflow-hidden">
//                 <div
//                   className="h-full rounded-full"
//                   style={{
//                     width: `${percentage}%`,
//                     background:
//                       index === 0
//                         ? "#3b82f6"
//                         : index === 1
//                         ? "#60a5fa"
//                         : index === 2
//                         ? "#93c5fd"
//                         : "#bfdbfe",
//                   }}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-8 pt-6 border-t border-[var(--border)]">
//         <p className="text-xs text-[var(--text-secondary)]">
//           Higher-ranked factors had a greater influence on the model's prediction.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default FactorsChart;

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
          border border-white/10
          rounded-3xl
          p-8
          min-h-[430px]
        "
      >
        <h3 className="text-2xl font-bold">
          AI Model Insights
        </h3>

        <p className="text-slate-400 mt-4">
          No explainability data available.
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
        .replace("Tool_wear_min", "Tool Wear")
        .replace("stress_index", "Stress Index")
        .replace("heat_stress", "Heat Stress")
        .replace("wear_rate", "Wear Rate")
        .replace("temp_gap", "Temperature Gap"),
      contribution: Math.abs(item.contribution),
    }))
    .sort(
      (a, b) =>
        b.contribution - a.contribution
    )
    .slice(0, 5);

  const maxValue =
    factors[0].contribution;

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[var(--bg-secondary)]
        border border-white/10
        rounded-3xl
        p-8
        min-h-[430px]
        hover:border-cyan-500/30
        transition-all duration-300
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -bottom-20
          -left-20
          w-56
          h-56
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
              AI Model Insights
            </h3>

            <p className="text-slate-400 mt-1">
              Features with the highest
              influence on this prediction
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
            SHAP Analysis
          </div>

        </div>

      </div>

      {/* Top Feature */}

      <div
        className="
          relative z-10
          mb-8
          p-4
          rounded-2xl
          border border-cyan-500/20
          bg-cyan-500/5
        "
      >
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
          Most Influential Feature
        </p>

        <h4 className="text-xl font-bold text-cyan-400">
          {factors[0].feature}
        </h4>
      </div>

      {/* Feature Bars */}

      <div className="space-y-5 relative z-10">

        {factors.map(
          (factor, index) => {

            const percentage =
              (factor.contribution /
                maxValue) *
              100;

            return (
              <div key={index}>

                <div className="flex justify-between items-center mb-2">

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        w-6
                        h-6
                        rounded-full
                        bg-cyan-500/10
                        text-cyan-400
                        text-xs
                        font-bold
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {index + 1}
                    </span>

                    <span className="font-medium">
                      {factor.feature}
                    </span>

                  </div>

                  <span className="text-xs text-slate-500">
                    Impact Score
                  </span>

                </div>

                <div
                  className="
                    h-3
                    rounded-full
                    bg-[var(--bg-primary)]
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      transition-all
                      duration-700
                    "
                    style={{
                      width: `${percentage}%`,
                      background:
                        index === 0
                          ? "linear-gradient(90deg,#06b6d4,#3b82f6)"
                          : index === 1
                          ? "linear-gradient(90deg,#38bdf8,#60a5fa)"
                          : index === 2
                          ? "linear-gradient(90deg,#60a5fa,#93c5fd)"
                          : "linear-gradient(90deg,#93c5fd,#bfdbfe)",
                    }}
                  />
                </div>

              </div>
            );
          }
        )}

      </div>

      {/* Footer */}

      <div
        className="
          relative z-10
          mt-8
          pt-6
          border-t border-white/10
        "
      >
        <p className="text-xs text-slate-500 leading-relaxed">
          Feature importance is derived from SHAP
          values generated directly from the trained
          machine learning model. Higher-ranked
          features contributed more strongly to
          the prediction outcome.
        </p>
      </div>

    </div>
  );
}

export default FactorsChart;