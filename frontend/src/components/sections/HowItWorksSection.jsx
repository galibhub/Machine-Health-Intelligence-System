const steps = [
  {
    step: "01",
    title: "Machine Data",
    description:
      "Collect operational parameters including temperature, torque, rotational speed, tool wear, and machine type.",
  },
  {
    step: "02",
    title: "Feature Engineering",
    description:
      "Generate advanced indicators such as power, stress index, wear rate, and temperature gap.",
  },
  {
    step: "03",
    title: "Model Prediction",
    description:
      "The trained machine learning model estimates machine failure probability and risk level.",
  },
  {
    step: "04",
    title: "SHAP Analysis",
    description:
      "Explain model decisions using feature contribution analysis and impact ranking.",
  },
  {
    step: "05",
    title: "Maintenance Action",
    description:
      "Generate root cause analysis, health score, and actionable maintenance recommendations.",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-24">

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
            AI Workflow
          </div>

          <h2
            className="
              text-5xl
              lg:text-6xl
              font-black
              mb-6
            "
          >
            How The System
            <span className="block text-cyan-400">
              Works
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
            From raw machine parameters to actionable
            maintenance recommendations powered by
            explainable artificial intelligence.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div
            className="
              hidden lg:block
              absolute
              top-0
              bottom-0
              left-1/2
              -translate-x-1/2
              w-[2px]
              bg-gradient-to-b
              from-cyan-500
              via-blue-500
              to-cyan-500
            "
          />

          <div className="space-y-12">

            {steps.map((item, index) => {

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="
                    relative
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                  "
                >

                  {/* LEFT */}

                  <div
                    className={
                      isLeft
                        ? ""
                        : "lg:order-2"
                    }
                  >
                    <div
                      className="
                        bg-[var(--bg-secondary)]
                        border border-white/10
                        rounded-3xl
                        p-8
                        hover:border-cyan-500/30
                        transition
                      "
                    >

                      <div
                        className="
                          text-cyan-400
                          text-sm
                          font-bold
                          mb-3
                        "
                      >
                        STEP {item.step}
                      </div>

                      <h3
                        className="
                          text-3xl
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
                  </div>

                  {/* RIGHT */}

                  <div
                    className={
                      isLeft
                        ? "lg:order-2"
                        : ""
                    }
                  />

                  {/* CENTER NODE */}

                  <div
                    className="
                      hidden lg:flex
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-14
                      h-14
                      rounded-full
                      bg-[var(--bg-primary)]
                      border
                      border-cyan-500
                      items-center
                      justify-center
                      font-bold
                      text-cyan-400
                      shadow-[0_0_25px_rgba(0,212,255,.25)]
                    "
                  >
                    {item.step}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;