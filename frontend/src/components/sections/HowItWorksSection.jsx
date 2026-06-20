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
      className="py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-[var(--accent)] font-medium mb-3">
            Workflow
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How The System
            <span className="block text-[var(--accent)]">
              Works
            </span>
          </h2>

          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            A streamlined AI-driven workflow designed to detect machine
            failures before they become expensive operational problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                relative
                bg-[var(--bg-secondary)]
                border border-[var(--border)]
                rounded-2xl
                p-6
                hover:border-[var(--accent)]
                transition-all duration-300
              "
            >
              <span
                className="
                  text-5xl
                  font-bold
                  text-[rgba(79,140,255,0.15)]
                "
              >
                {step.number}
              </span>

              <h3 className="text-xl font-semibold mt-4 mb-3">
                {step.title}
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
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