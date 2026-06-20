const capabilities = [
  {
    title: "Failure Prediction",
    description:
      "Predict equipment failures before they occur using machine learning models trained on industrial data.",
  },
  {
    title: "Root Cause Analysis",
    description:
      "Identify the operational factors contributing most to machine degradation and failure risk.",
  },
  {
    title: "SHAP Explainability",
    description:
      "Understand exactly why the model made a prediction through feature contribution analysis.",
  },
  {
    title: "Maintenance Recommendations",
    description:
      "Generate actionable maintenance plans to reduce downtime and optimize equipment performance.",
  },
];

const stats = [
  {
    value: "99.15%",
    label: "Model Accuracy",
  },
  {
    value: "10K+",
    label: "Industrial Records",
  },
  {
    value: "12",
    label: "Engineered Features",
  },
  {
    value: "SHAP",
    label: "Explainable AI",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
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
            Platform Overview
          </div>

          <h2
            className="
              text-5xl
              lg:text-6xl
              font-black
              mb-6
            "
          >
            One Platform.
            <span className="block text-cyan-400">
              Complete Machine Intelligence.
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
            Built to help industries move from
            reactive maintenance to proactive
            machine health management using
            explainable artificial intelligence.
          </p>

        </div>

        {/* Capability Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-8
            mb-20
          "
        >
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="
                group
                bg-[var(--bg-secondary)]
                border border-white/10
                rounded-3xl
                p-8
                hover:border-cyan-500/30
                hover:-translate-y-1
                transition
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-cyan-500/10
                  border border-cyan-500/20
                  mb-6
                  flex
                  items-center
                  justify-center
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

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-slate-400
                  leading-relaxed
                "
              >
                {item.description}
              </p>

            </div>
          ))}
        </div>

        {/* Stats */}

        <div
          className="
            bg-[var(--bg-secondary)]
            border border-white/10
            rounded-3xl
            overflow-hidden
          "
        >

          <div className="grid md:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`
                  p-10
                  text-center

                  ${
                    index !== stats.length - 1
                      ? "border-b md:border-b-0 md:border-r border-white/10"
                      : ""
                  }
                `}
              >

                <h3
                  className="
                    text-5xl
                    font-black
                    text-cyan-400
                    mb-3
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    text-slate-400
                    font-medium
                  "
                >
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;