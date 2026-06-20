import { useNavigate } from "react-router-dom";

function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          bg-cyan-500/10
          blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative
            bg-[var(--bg-secondary)]
            border border-cyan-500/20
            rounded-[40px]
            p-12
            md:p-20
            text-center
            overflow-hidden
          "
        >

          {/* Decorative Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-10
              pointer-events-none
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Badge */}

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
              mb-8
            "
          >
            AI-Powered Predictive Maintenance
          </div>

          {/* Heading */}

          <h2
            className="
              text-5xl
              lg:text-7xl
              font-black
              leading-tight
              mb-8
            "
          >
            Prevent Failures
            <span className="block text-cyan-400">
              Before Downtime Happens
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              max-w-3xl
              mx-auto
              text-lg
              text-slate-400
              leading-relaxed
              mb-12
            "
          >
            Analyze machine health, identify
            hidden risks, understand root causes,
            and receive actionable maintenance
            recommendations powered by explainable AI.
          </p>

          {/* Buttons */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-5
              mb-10
            "
          >

            <button
              onClick={() =>
                navigate("/analyze")
              }
              className="
                px-10
                py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-black
                font-bold
                shadow-[0_0_35px_rgba(0,212,255,.35)]
                hover:scale-105
                transition
              "
            >
              Analyze Machine
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                px-10
                py-4
                rounded-xl
                border
                border-white/15
                bg-white/5
                backdrop-blur
                font-semibold
                hover:border-cyan-500/30
                transition
              "
            >
              Explore Features
            </button>

          </div>

          {/* Bottom Text */}

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            Powered by XGBoost, SHAP Explainability,
            and Industrial Machine Learning
          </p>

        </div>

      </div>
    </section>
  );
}

export default CTASection;