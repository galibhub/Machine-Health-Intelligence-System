// import usePredictionStore from "../../services/store";

// function RootCauseCard() {
//   const result = usePredictionStore(
//     (state) => state.result
//   );

//   if (!result) return null;

//   const getSeverityStyles = (severity) => {
//     switch (severity) {
//       case "Low":
//         return {
//           text: "text-green-400",
//           bg: "bg-green-500/10",
//         };

//       case "Medium":
//         return {
//           text: "text-yellow-400",
//           bg: "bg-yellow-500/10",
//         };

//       case "High":
//         return {
//           text: "text-orange-400",
//           bg: "bg-orange-500/10",
//         };

//       case "Critical":
//         return {
//           text: "text-red-500",
//           bg: "bg-red-500/10",
//         };

//       default:
//         return {
//           text: "text-white",
//           bg: "bg-white/5",
//         };
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
//       <div className="mb-8">
//         <h3 className="text-2xl font-bold">
//           Root Cause Analysis
//         </h3>

//         <p className="text-sm text-[var(--text-secondary)] mt-1">
//           Potential factors contributing to the predicted outcome
//         </p>
//       </div>

//       {result.root_causes.length === 0 ? (
//         <div
//           className="
//             text-center
//             py-12
//             text-[var(--text-secondary)]
//           "
//         >
//           No significant root causes detected.
//         </div>
//       ) : (
//         <div className="grid gap-4">
//           {result.root_causes.map(
//             (cause, index) => {
//               const severityStyle =
//                 getSeverityStyles(
//                   cause.severity
//                 );

//               return (
//                 <div
//                   key={index}
//                   className="
//                     border border-[var(--border)]
//                     rounded-xl
//                     p-5
//                     hover:border-slate-500
//                     transition
//                   "
//                 >
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

//                     <div>
//                       <h4 className="text-lg font-semibold">
//                         {cause.factor}
//                       </h4>

//                       <p className="text-sm text-[var(--text-secondary)] mt-2">
//                         {cause.message}
//                       </p>
//                     </div>

//                     <div className="flex items-center gap-3">

//                       <div
//                         className={`
//                           px-3
//                           py-1
//                           rounded-full
//                           text-sm
//                           font-medium
//                           ${severityStyle.text}
//                           ${severityStyle.bg}
//                         `}
//                       >
//                         {cause.severity}
//                       </div>

//                       <div
//                         className="
//                           px-3
//                           py-1
//                           rounded-full
//                           bg-[var(--bg-primary)]
//                           text-sm
//                           font-medium
//                         "
//                       >
//                         {cause.value}
//                       </div>

//                     </div>

//                   </div>
//                 </div>
//               );
//             }
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default RootCauseCard;

import usePredictionStore from "../../services/store";

function RootCauseCard() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const getSeverityConfig = (severity) => {
    switch (severity) {
      case "Critical":
        return {
          color: "text-red-400",
          bg: "bg-red-500/10",
          border: "border-red-500/20",
          glow: "shadow-red-500/10",
        };

      case "High":
        return {
          color: "text-orange-400",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
          glow: "shadow-orange-500/10",
        };

      case "Medium":
        return {
          color: "text-yellow-400",
          bg: "bg-yellow-500/10",
          border: "border-yellow-500/20",
          glow: "shadow-yellow-500/10",
        };

      default:
        return {
          color: "text-emerald-400",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/20",
          glow: "shadow-emerald-500/10",
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
        min-h-[430px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-52
          h-52
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
              Root Cause Analysis
            </h3>

            <p className="text-slate-400 mt-1">
              Engineering conditions contributing
              to the prediction outcome
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
            {result.root_causes.length} Factors
          </div>

        </div>
      </div>

      {/* Empty State */}

      {result.root_causes.length === 0 ? (
        <div
          className="
            flex
            items-center
            justify-center
            h-[280px]
            text-center
          "
        >
          <div>
            <div className="text-5xl mb-4">
              ✅
            </div>

            <h4 className="text-xl font-bold">
              No Critical Factors
            </h4>

            <p className="text-slate-400 mt-2">
              Machine operating conditions
              appear stable.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4 relative z-10">

          {result.root_causes.map(
            (cause, index) => {

              const config =
                getSeverityConfig(
                  cause.severity
                );

              return (
                <div
                  key={index}
                  className={`
                    group
                    border
                    rounded-2xl
                    p-5
                    transition-all
                    hover:translate-x-1
                    ${config.border}
                    ${config.bg}
                  `}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    {/* Left */}

                    <div className="flex gap-4">

                      <div
                        className={`
                          w-3
                          rounded-full
                          ${config.bg}
                        `}
                      />

                      <div>
                        <h4 className="text-lg font-bold">
                          {cause.factor}
                        </h4>

                        <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                          {cause.message}
                        </p>
                      </div>

                    </div>

                    {/* Right */}

                    <div className="flex items-center gap-3">

                      <div
                        className={`
                          px-3 py-1
                          rounded-full
                          text-sm
                          font-semibold
                          ${config.color}
                          ${config.bg}
                        `}
                      >
                        {cause.severity}
                      </div>

                      <div
                        className="
                          px-4 py-2
                          rounded-xl
                          bg-[var(--bg-primary)]
                          border border-white/5
                          text-sm
                          font-bold
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