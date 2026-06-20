function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-[var(--accent)] font-medium mb-4">
              Machine Health Intelligence Platform
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Predict Machine Failures
              <span className="block text-[var(--accent)]">
                Before They Happen
              </span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
              AI-powered predictive maintenance system that analyzes
              machine operating conditions and identifies failure risks
              before costly breakdowns occur.
            </p>

            <div className="flex gap-4">

              <button
                className="
                  px-6 py-3
                  rounded-xl
                  bg-[var(--accent)]
                  font-medium
                "
              >
                Analyze Machine
              </button>

              <button
                className="
                  px-6 py-3
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--bg-secondary)]
                "
              >
                Learn More
              </button>

            </div>

          </div>

          <div>

            <div
              className="
                bg-[var(--bg-secondary)]
                border
                border-[var(--border)]
                rounded-2xl
                p-8
              "
            >

              <div className="flex justify-between items-center mb-8">

                <span className="text-[var(--text-secondary)]">
                  Machine Health
                </span>

                <span className="text-green-400">
                  Healthy
                </span>

              </div>

              <div className="mb-8">

                <p className="text-sm text-[var(--text-secondary)] mb-2">
                  Health Score
                </p>

                <h2 className="text-6xl font-bold">
                  94
                </h2>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Risk Level</span>
                  <span className="text-green-400">Low</span>
                </div>

                <div className="flex justify-between">
                  <span>Failure Probability</span>
                  <span>6%</span>
                </div>

                <div className="flex justify-between">
                  <span>Status</span>
                  <span>Operational</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;