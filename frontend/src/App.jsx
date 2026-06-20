import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AnalyzePage from "./pages/AnalyzePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/analyze"
          element={<AnalyzePage />}
        />

        <Route
          path="/result"
          element={<ResultPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;