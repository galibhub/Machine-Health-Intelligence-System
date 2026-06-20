import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PredictionForm from "../components/prediction/PredictionForm";

function AnalyzePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <PredictionForm />
      </main>

      <Footer />
    </>
  );
}

export default AnalyzePage;