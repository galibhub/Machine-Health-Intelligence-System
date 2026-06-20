import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const stats = [
    { value: "99.15%", label: "Accuracy" },
    { value: "10K+", label: "Records" },
    { value: "12", label: "Features" },
    { value: "SHAP", label: "Explainable AI" },
  ];

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Glow Effects */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <div
              className="
                inline-flex
                items-center
                px-4 py-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                text-cyan-400
                text-sm
                font-semibold
                mb-6
              "
            >
              AI-Powered Predictive Maintenance
            </div>

            <h1
              className="
                text-5xl
                lg:text-7xl
                font-black
                leading-tight
              "
            >
              Predict Machine
              <span className="block text-cyan-400">
                Failures
              </span>
              Before They Cause Downtime
            </h1>

            <p
              className="
                mt-6
                text-lg
                text-slate-400
                leading-relaxed
                max-w-xl
              "
            >
              Monitor machine health, detect failure
              risks, identify root causes, and receive
              maintenance recommendations using
              explainable AI.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => navigate("/analyze")}
                className="
                  px-8 py-4
                  rounded-xl
                  font-semibold
                  text-black
                  hover:scale-105
                  transition
                "
                style={{
                  background:
                    "linear-gradient(90deg,#00D4FF,#3B82F6)",
                  boxShadow:
                    "0 0 30px rgba(0,212,255,.25)",
                }}
              >
                Analyze Machine
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="
                  px-8 py-4
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                Explore Features
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4 mt-12">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-[var(--bg-secondary)]
                    border border-white/10
                    rounded-2xl
                    p-5
                  "
                >
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {item.value}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div
              className="
                bg-[var(--bg-secondary)]
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-xl
              "
            >

              <div className="flex justify-between items-center mb-8">

                <h3 className="text-2xl font-bold">
                  AI Dashboard
                </h3>

                <span className="text-green-400 text-sm">
                  ● Live
                </span>

              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">

                <div
                  className="
                    bg-[var(--bg-primary)]
                    border border-white/10
                    rounded-xl
                    p-4
                  "
                >
                  <p className="text-slate-400 text-sm">
                    Health Score
                  </p>

                  <h4 className="text-4xl font-black text-green-400 mt-2">
                    94
                  </h4>
                </div>

                <div
                  className="
                    bg-[var(--bg-primary)]
                    border border-white/10
                    rounded-xl
                    p-4
                  "
                >
                  <p className="text-slate-400 text-sm">
                    Risk Level
                  </p>

                  <h4 className="text-4xl font-black text-cyan-400 mt-2">
                    Low
                  </h4>
                </div>

              </div>

              <div className="space-y-5">

                {[
                  {
                    factor: "Stress Index",
                    width: "95%",
                  },
                  {
                    factor: "Power",
                    width: "85%",
                  },
                  {
                    factor: "Tool Wear",
                    width: "70%",
                  },
                  {
                    factor: "Temperature Gap",
                    width: "55%",
                  },
                ].map((item) => (
                  <div key={item.factor}>

                    <div className="flex justify-between mb-2">
                      <span>
                        {item.factor}
                      </span>

                      <span className="text-slate-400">
                        Impact
                      </span>
                    </div>

                    <div
                      className="
                        h-3
                        bg-[var(--bg-primary)]
                        rounded-full
                        overflow-hidden
                      "
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: item.width,
                          background:
                            "linear-gradient(90deg,#00D4FF,#3B82F6)",
                        }}
                      />
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;