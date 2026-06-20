import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="
        relative
        border-t
        border-white/10
        overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[300px]
          bg-cyan-500/5
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
          relative
          z-10
        "
      >
        <div
          className="
            grid
            md:grid-cols-3
            gap-12
          "
        >
          {/* Brand */}

          <div>
            <h3
              className="
                text-2xl
                font-black
                mb-4
              "
            >
              Predictive
              <span className="text-cyan-400 ml-2">
                Maintenance AI
              </span>
            </h3>

            <p
              className="
                text-slate-400
                leading-relaxed
              "
            >
              AI-powered machine health
              intelligence platform for
              predictive maintenance,
              risk assessment, root cause
              analysis, and maintenance
              recommendations.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4
              className="
                font-bold
                text-lg
                mb-5
              "
            >
              Quick Links
            </h4>

            <div className="space-y-3">

              <Link
                to="/"
                className="
                  block
                  text-slate-400
                  hover:text-cyan-400
                  transition
                "
              >
                Home
              </Link>

              <Link
                to="/analyze"
                className="
                  block
                  text-slate-400
                  hover:text-cyan-400
                  transition
                "
              >
                Analyze Machine
              </Link>

              <button
                onClick={() =>
                  document
                    .getElementById(
                      "features"
                    )
                    ?.scrollIntoView({
                      behavior:
                        "smooth",
                    })
                }
                className="
                  block
                  text-slate-400
                  hover:text-cyan-400
                  transition
                "
              >
                Features
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById(
                      "about"
                    )
                    ?.scrollIntoView({
                      behavior:
                        "smooth",
                    })
                }
                className="
                  block
                  text-slate-400
                  hover:text-cyan-400
                  transition
                "
              >
                About
              </button>

            </div>
          </div>

        {/* Core Capabilities */}

<div>
  <h4
    className="
      font-bold
      text-lg
      mb-5
    "
  >
    Core Capabilities
  </h4>

  <div className="space-y-3">

    <div className="text-slate-400">
      Failure Prediction
    </div>

    <div className="text-slate-400">
      Health Score Assessment
    </div>

    <div className="text-slate-400">
      Root Cause Analysis
    </div>

    <div className="text-slate-400">
      SHAP Explainability
    </div>

    <div className="text-slate-400">
      Maintenance Recommendations
    </div>

  </div>
</div>
        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-white/10
            mt-12
            pt-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >
          <p
            className="
              text-sm
              text-slate-500
            "
          >
            © 2026 Predictive Maintenance AI.
            All Rights Reserved.
          </p>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Built with React, FastAPI,
            XGBoost & SHAP
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;