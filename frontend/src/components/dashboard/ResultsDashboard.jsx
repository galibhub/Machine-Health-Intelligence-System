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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Analysis Result
        </h2>

        <PredictionSummary />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">

          <div className="lg:col-span-1">
            <HealthScoreGauge />
          </div>

          <div className="lg:col-span-2">
            <FactorsChart />
          </div>

        </div>

        <div className="mt-8">
          <RootCauseCard />
        </div>

        <div className="mt-8">
          <RecommendationCard />
        </div>

      </div>
    </section>
  );
}

export default ResultsDashboard;