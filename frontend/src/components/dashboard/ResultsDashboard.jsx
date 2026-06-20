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
        py-20
        min-h-screen
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="mb-10">

          <div
            className="
              inline-flex
              px-4 py-2
              rounded-full
              bg-cyan-500/10
              border border-cyan-500/20
              text-cyan-400
              text-sm
              font-semibold
              mb-4
            "
          >
            AI Analysis Report
          </div>

          <h2
            className="
              text-5xl
              font-black
              tracking-tight
            "
          >
            Machine Health
            <span className="block text-cyan-400">
              Assessment
            </span>
          </h2>

        </div>

        {/* Prediction Overview */}

        <PredictionSummary />

        {/* Main Analysis Row */}

        <div className="grid lg:grid-cols-3 gap-6 mt-8">

          <div>
            <HealthScoreGauge />
          </div>

          <div className="lg:col-span-2">
            <RootCauseCard />
          </div>

        </div>

        {/* Explainability */}

        <div className="mt-8">
          <FactorsChart />
        </div>

        {/* Recommendations */}

        <div className="mt-8">
          <RecommendationCard />
        </div>

      </div>
    </section>
  );
}

export default ResultsDashboard;