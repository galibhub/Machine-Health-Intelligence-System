import { Navigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ResultsDashboard from "../components/dashboard/ResultsDashboard";

import usePredictionStore from "../services/store";

function ResultPage() {
  const result = usePredictionStore(
    (state) => state.result
  );

  if (!result) {
    return <Navigate to="/analyze" />;
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <ResultsDashboard />
      </main>

      <Footer />
    </>
  );
}

export default ResultPage;