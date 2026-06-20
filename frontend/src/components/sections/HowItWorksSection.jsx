const steps = [
  {
    number: "01",
    title: "Input Machine Parameters",
    description:
      "Provide machine operating parameters such as temperature, rotational speed, torque, tool wear, and machine type.",
  },
  {
    number: "02",
    title: "AI-Powered Analysis",
    description:
      "Our trained machine learning model evaluates machine condition and detects hidden failure patterns.",
  },
  {
    number: "03",
    title: "Risk Assessment",
    description:
      "The system calculates failure probability, machine health score, and overall risk level.",
  },
  {
    number: "04",
    title: "Actionable Recommendations",
    description:
      "Receive maintenance recommendations and root-cause insights to prevent costly downtime.",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      // CHANGED: Removed the /50 transparency so it perfectly matches the Hero section
      className="py-24 bg-slate-50 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3">
            Workflow
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            How The System{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-1">
              Works
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A streamlined AI-driven workflow designed to detect machine
            failures before they become expensive operational problems.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative
                bg-white
                border border-slate-200/80
                rounded-2xl
                p-8
                shadow-sm
                overflow-hidden
                hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-300/50
                transition-all duration-300 ease-in-out
              "
            >
              {/* Decorative Hover Progress Bar */}
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 ease-out group-hover:w-full" />

              {/* Step Number */}
              <span
                className="
                  inline-block
                  text-6xl
                  font-black
                  text-transparent bg-clip-text bg-gradient-to-r from-blue-600/10 to-indigo-600/10
                  mb-4
                  transition-all duration-300
                  group-hover:from-blue-600/20 group-hover:to-indigo-600/20 group-hover:scale-105 group-hover:-rotate-3 origin-left
                "
              >
                {step.number}
              </span>

              {/* Card Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;