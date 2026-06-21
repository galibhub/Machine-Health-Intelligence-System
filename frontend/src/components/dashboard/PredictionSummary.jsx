// import usePredictionStore from "../../services/store";

// function PredictionSummary() {
//   const result = usePredictionStore(
//     (state) => state.result
//   );

//   if (!result) return null;

//   const cards = [
//     {
//       title: "Prediction",
//       value: result.prediction,
//       color:
//         result.prediction === "Failure"
//           ? "text-red-400"
//           : "text-green-400",
//     },

//     {
//       title: "Risk Level",
//       value: result.risk_level,
//       color:
//         result.risk_level === "Critical"
//           ? "text-red-400"
//           : result.risk_level === "High"
//           ? "text-orange-400"
//           : result.risk_level === "Medium"
//           ? "text-yellow-400"
//           : "text-green-400",
//     },

//     {
//       title: "Failure Probability",
//       value: `${result.probability.toFixed(
//         2
//       )}%`,
//       color: "text-cyan-400",
//     },

//     {
//       title: "Health Score",
//       value: result.health_score,
//       color: "text-cyan-400",
//     },
//   ];

//   return (
//     <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
//       {cards.map((card) => (
//         <div
//           key={card.title}
//           className="
//             relative
//             overflow-hidden
//             bg-[var(--bg-secondary)]
//             border border-white/10
//             rounded-3xl
//             p-6
//             hover:border-cyan-500/30
//             transition-all
//           "
//         >
//           <div
//             className="
//               absolute
//               top-0
//               right-0
//               w-24
//               h-24
//               bg-cyan-500/10
//               blur-3xl
//               rounded-full
//             "
//           />

//           <div className="relative z-10">
//             <p
//               className="
//                 text-xs
//                 uppercase
//                 tracking-widest
//                 text-slate-400
//                 mb-3
//               "
//             >
//               {card.title}
//             </p>

//             <h3
//               className={`
//                 text-4xl
//                 font-black
//                 tracking-tight
//                 ${card.color}
//               `}
//             >
//               {card.value}
//             </h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PredictionSummary;


import usePredictionStore from "../../services/store";

function PredictionSummary() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) return null;

  const cards = [
    {
      title: "Prediction",
      value: result.prediction,
      color:
        result.prediction === "Failure"
          ? "text-red-400"
          : "text-emerald-400",
      glow:
        result.prediction === "Failure"
          ? "shadow-red-500/20"
          : "shadow-emerald-500/20",
    },

    {
      title: "Risk Level",
      value: result.risk_level,
      color:
        result.risk_level === "Critical"
          ? "text-red-400"
          : result.risk_level === "High"
          ? "text-orange-400"
          : result.risk_level === "Medium"
          ? "text-yellow-400"
          : "text-emerald-400",
      glow: "shadow-cyan-500/20",
    },

    {
      title: "Failure Probability",
      value: `${result.probability.toFixed(2)}%`,
      color: "text-cyan-400",
      glow: "shadow-cyan-500/20",
    },

    {
      title: "Health Score",
      value: `${result.health_score}/100`,
      color: "text-cyan-400",
      glow: "shadow-cyan-500/20",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-[var(--bg-secondary)]
            p-6
            hover:border-cyan-500/30
            hover:-translate-y-1
            transition-all duration-300
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -top-10
              -right-10
              w-32
              h-32
              bg-cyan-500/10
              blur-3xl
              rounded-full
            "
          />

          {/* Accent Line */}
          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-[2px]
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
          />

          <div className="relative z-10">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-slate-500
                mb-4
              "
            >
              {card.title}
            </p>

            <h3
              className={`
                text-4xl
                font-black
                tracking-tight
                ${card.color}
              `}
            >
              {card.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PredictionSummary;