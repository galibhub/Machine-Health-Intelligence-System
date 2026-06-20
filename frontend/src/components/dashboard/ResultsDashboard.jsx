import PredictionCards from "./PredictionCards";
import RootCauseCard from "./RootCauseCard";
import RecommendationCard from "./RecommendationCard";
import HealthScoreGauge from "../charts/HealthScoreGauge";

import usePredictionStore from "../../services/store";

function ResultsDashboard() {
  const result = usePredictionStore((state) => state.result);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">No Prediction Available</h2>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Analysis Result</h2>

        <PredictionCards />

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <HealthScoreGauge />

          <div className="lg:col-span-2">
            <RootCauseCard />
          </div>
        </div>

        <div className="mt-8">
          <RecommendationCard />
        </div>
      </div>
    </section>
  );
}

export default ResultsDashboard;
