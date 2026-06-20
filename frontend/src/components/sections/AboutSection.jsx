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
      // CHANGED: Replaced bg-slate-50/50 with bg-white for perfect alternating section colors
      className="py-24 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3">
              About The Platform
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Built For Modern{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-1">
                Predictive Maintenance
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Predictive Maintenance AI is an industrial machine health
              intelligence platform that leverages machine learning to
              identify potential equipment failures before they occur.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              By combining operational parameters, feature engineering,
              risk assessment, and predictive analytics, the system
              enables proactive maintenance planning and reduces
              unplanned downtime.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  group
                  bg-white 
                  border border-slate-200/80 
                  rounded-2xl 
                  p-8 
                  text-center
                  shadow-sm
                  hover:shadow-lg hover:-translate-y-1 hover:border-blue-200
                  transition-all duration-300 ease-in-out
                "
              >
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 transition-transform duration-300 group-hover:scale-105">
                  {item.value}
                </h3>

                <p className="text-slate-500 font-medium">
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