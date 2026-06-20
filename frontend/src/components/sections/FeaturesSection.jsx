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
      className="py-24 bg-white border-t border-slate-200/80"
    >
      {/* Aligned to max-w-7xl for consistency with Navbar and About */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3">
            Platform Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Everything You Need For
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-1">
              Predictive Maintenance
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Monitor machine condition, assess risk, identify root causes,
            and make proactive maintenance decisions with AI-driven insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                bg-white
                border border-slate-200/80
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-300/50
                transition-all duration-300 ease-in-out
              "
            >
              {/* Icon / Indicator */}
              <div
                className="
                  w-12 h-12
                  rounded-xl
                  bg-blue-50
                  flex items-center justify-center
                  mb-6
                  transition-colors duration-300
                  group-hover:bg-blue-100
                "
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm transition-transform duration-300 group-hover:scale-150" />
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
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