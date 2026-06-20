const features = [
  {
    title: "Failure Prediction",
    description:
      "Predict equipment failures before they occur using machine learning models trained on industrial operational data.",
  },
  {
    title: "SHAP Explainability",
    description:
      "Understand why the AI made a prediction with transparent feature-level explanations and impact analysis.",
  },
  {
    title: "Root Cause Analysis",
    description:
      "Identify critical operating conditions contributing to elevated machine failure risk.",
  },
  {
    title: "Maintenance Recommendations",
    description:
      "Receive actionable maintenance strategies designed to reduce downtime and improve reliability.",
  },
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-20">

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
              mb-6
            "
          >
            Platform Capabilities
          </div>

          <h2
            className="
              text-5xl
              lg:text-6xl
              font-black
              mb-6
            "
          >
            Everything You Need For
            <span className="block text-cyan-400">
              Predictive Maintenance
            </span>
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              text-lg
              text-slate-400
            "
          >
            Monitor machine condition, assess failure risks,
            understand model decisions, and take proactive
            maintenance actions using AI-powered insights.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                relative
                bg-[var(--bg-secondary)]
                border border-white/10
                rounded-3xl
                p-10
                overflow-hidden
                hover:border-cyan-500/30
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(0,212,255,.08), transparent 50%)",
                }}
              />

              {/* Icon */}

              <div
                className="
                  relative
                  z-10
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  mb-8
                "
              >
                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                    bg-cyan-400
                  "
                />
              </div>

              <div className="relative z-10">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-4
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    text-slate-400
                    leading-relaxed
                    text-lg
                  "
                >
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;