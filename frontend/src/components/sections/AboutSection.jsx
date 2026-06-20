const stats = [
  {
    value: "99.15%",
    label: "Model Accuracy",
  },
  {
    value: "88.6%",
    label: "Cross Validation F1",
  },
  {
    value: "10,000",
    label: "Industrial Records",
  },
  {
    value: "12",
    label: "Selected Features",
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 border-t border-[var(--border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-[var(--accent)] font-medium mb-3">
              About The Platform
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built For Modern
              <span className="block text-[var(--accent)]">
                Predictive Maintenance
              </span>
            </h2>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              Predictive Maintenance AI is an industrial machine health
              intelligence platform that leverages machine learning to
              identify potential equipment failures before they occur.
            </p>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              By combining operational parameters, feature engineering,
              risk assessment, and predictive analytics, the system
              enables proactive maintenance planning and reduces
              unplanned downtime.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  bg-[var(--bg-secondary)]
                  border border-[var(--border)]
                  rounded-2xl
                  p-8
                  text-center
                "
              >
                <h3 className="text-4xl font-bold text-[var(--accent)] mb-3">
                  {item.value}
                </h3>

                <p className="text-[var(--text-secondary)]">
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