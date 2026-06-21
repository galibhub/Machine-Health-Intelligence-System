// import RootCauseCard from "./RootCauseCard";
// import RecommendationCard from "./RecommendationCard";
// import HealthScoreGauge from "../charts/HealthScoreGauge";
// import FactorsChart from "../charts/FactorsChart";
// import PredictionSummary from "./PredictionSummary";

// import usePredictionStore from "../../services/store";

// function ResultsDashboard() {
//   const result = usePredictionStore((state) => state.result);

//   if (!result) {
//     return (
//       <div className="min-h-screen flex items-center justify-center px-6">
//         <div
//           className="
//             text-center
//             bg-[var(--bg-secondary)]
//             border border-white/10
//             rounded-3xl
//             p-10
//             max-w-lg
//             w-full
//           "
//         >
//           <h2 className="text-3xl font-bold mb-3">No Analysis Available</h2>

//           <p className="text-[var(--text-secondary)]">
//             Run a machine analysis first.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section
//       className="
//         py-20
//         min-h-screen
//         relative
//       "
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}

//         <div className="mb-10">
//           <div
//             className="
//               inline-flex
//               px-4 py-2
//               rounded-full
//               bg-cyan-500/10
//               border border-cyan-500/20
//               text-cyan-400
//               text-sm
//               font-semibold
//               mb-4
//             "
//           >
//             AI Analysis Report
//           </div>

//           <h2
//             className="
//               text-5xl
//               font-black
//               tracking-tight
//             "
//           >
//             Machine Health
//             <span className="block text-cyan-400">Assessment</span>
//           </h2>
//         </div>

//         {/* Prediction Overview */}

//         <PredictionSummary />

//         {/* Main Analysis */}

//         <div className="grid lg:grid-cols-12 gap-6 mt-8">
//           {/* Left Column */}

//           <div className="lg:col-span-4 space-y-6">
//             <HealthScoreGauge />
//             <FactorsChart />
//           </div>

//           {/* Right Column */}

//           <div className="lg:col-span-8">
//             <RootCauseCard />
//           </div>
//         </div>

//         {/* Recommendations */}

//         <div className="mt-6">
//           <RecommendationCard />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ResultsDashboard;

import RootCauseCard from "./RootCauseCard";
import RecommendationCard from "./RecommendationCard";
import HealthScoreGauge from "../charts/HealthScoreGauge";
import FactorsChart from "../charts/FactorsChart";
import PredictionSummary from "./PredictionSummary";

import usePredictionStore from "../../services/store";

function ResultsDashboard() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div
          className="
            text-center
            bg-[var(--bg-secondary)]
            border border-white/10
            rounded-3xl
            p-10
            max-w-lg
            w-full
          "
        >
          <h2 className="text-3xl font-bold mb-3">
            No Analysis Available
          </h2>

          <p className="text-[var(--text-secondary)]">
            Run a machine analysis first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section
      className="
        relative
        min-h-screen
        py-20
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          bg-cyan-500/5
          blur-[150px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[500px]
          bg-blue-500/5
          blur-[150px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}

        <div className="mb-12">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-400
              text-sm
              font-semibold
              mb-5
            "
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            AI Analysis Report
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>

              <h1
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  tracking-tight
                "
              >
                Machine Health
              </h1>

              <h2
                className="
                  text-5xl
                  md:text-6xl
                  font-black
                  text-cyan-400
                  tracking-tight
                "
              >
                Assessment
              </h2>

              <p className="text-slate-400 mt-4 max-w-2xl">
                AI-powered predictive maintenance report generated
                from machine telemetry, operational parameters,
                explainability analysis, and engineering risk assessment.
              </p>

            </div>

            {/* Machine Info */}

            <div
              className="
                bg-[var(--bg-secondary)]
                border border-white/10
                rounded-3xl
                p-5
                min-w-[280px]
              "
            >
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
                Machine Information
              </p>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Machine ID
                  </span>

                  <span className="font-semibold">
                    {result.machine_id || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Company
                  </span>

                  <span className="font-semibold">
                    {result.company_name || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Analysis
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    Completed
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* KPI Cards */}

        <PredictionSummary />

        {/* Main Grid */}

        <div className="grid lg:grid-cols-12 gap-6 mt-8">

          {/* Left Column */}

          <div className="lg:col-span-4 space-y-6">

            <HealthScoreGauge />

            <FactorsChart />

          </div>

          {/* Right Column */}

          <div className="lg:col-span-8">

            <RootCauseCard />

          </div>

        </div>

        {/* Recommendations */}

        <div className="mt-6">

          <RecommendationCard />

        </div>

      </div>
    </section>
  );
}

export default ResultsDashboard;
