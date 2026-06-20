const features = [
  {
    title: "Failure Prediction",
    description:
      "Predict machine failures before they occur using machine learning models trained on industrial operating data.",
  },
  {
    title: "Health Score Assessment",
    description:
      "Generate an overall machine health score to quickly understand equipment condition and reliability.",
  },
  {
    title: "Root Cause Analysis",
    description:
      "Identify the most influential operating factors contributing to elevated machine risk levels.",
  },
  {
    title: "Maintenance Recommendations",
    description:
      "Receive actionable maintenance suggestions to reduce downtime and improve machine performance.",
  },
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[var(--accent)] font-medium mb-3">
            Platform Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need For
            <span className="block text-[var(--accent)]">
              Predictive Maintenance
            </span>
          </h2>

          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Monitor machine condition, assess risk, identify root causes,
            and make proactive maintenance decisions with AI-driven insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-[var(--bg-secondary)]
                border border-[var(--border)]
                rounded-2xl
                p-6
                hover:border-[var(--accent)]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-xl
                  bg-[rgba(79,140,255,0.12)]
                  flex items-center justify-center
                  mb-5
                "
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;