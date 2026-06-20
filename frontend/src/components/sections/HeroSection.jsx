function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
      
      {/* Ambient Background Glow for Hero */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div>
            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">
              Machine Health Intelligence Platform
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Predict Machine Failures
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-2 mt-2">
                Before They Happen
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              AI-powered predictive maintenance system that analyzes
              machine operating conditions and identifies failure risks
              before costly breakdowns occur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="
                  px-8 py-3.5 
                  rounded-full
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  text-white font-semibold tracking-wide
                  shadow-lg shadow-blue-500/30
                  hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5
                  active:scale-95 active:translate-y-0
                  transition-all duration-200
                "
              >
                Analyze Machine
              </button>

              <button
                className="
                  px-8 py-3.5 
                  rounded-full
                  bg-white
                  border border-slate-200
                  text-slate-700 font-semibold tracking-wide
                  shadow-sm
                  hover:bg-slate-50 hover:border-slate-300 hover:text-blue-600 hover:-translate-y-0.5
                  active:scale-95 active:translate-y-0
                  transition-all duration-200
                "
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: UI Widget Illustration */}
          <div className="relative">
            {/* Decorative ring behind the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 opacity-50 pointer-events-none" />
            
            <div
              className="
                relative
                bg-white/90 backdrop-blur-sm
                border border-slate-200/80
                rounded-3xl
                p-8 md:p-10
                shadow-2xl shadow-blue-900/5
              "
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-10">
                <span className="text-slate-500 font-semibold tracking-wide uppercase text-sm">
                  Machine Health
                </span>
                
                {/* Upgraded Status Pill with pulsing dot */}
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Healthy
                </span>
              </div>

              {/* Main Score */}
              <div className="mb-10">
                <p className="text-sm text-slate-500 font-medium mb-2">
                  Overall Health Score
                </p>
                <h2 className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter">
                  94<span className="text-3xl text-slate-400 font-bold">/100</span>
                </h2>
              </div>

              {/* Divider */}
              <hr className="border-slate-100 mb-8" />

              {/* Stats List */}
              <div className="space-y-5">
                <div className="flex justify-between items-center group">
                  <span className="text-slate-600 font-medium">Risk Level</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-md group-hover:bg-emerald-100 transition-colors">
                    Low
                  </span>
                </div>

                <div className="flex justify-between items-center group">
                  <span className="text-slate-600 font-medium">Failure Probability</span>
                  <span className="text-slate-900 font-bold bg-slate-50 px-2.5 py-1 rounded-md group-hover:bg-slate-100 transition-colors">
                    6%
                  </span>
                </div>

                <div className="flex justify-between items-center group">
                  <span className="text-slate-600 font-medium">Status</span>
                  <span className="text-slate-900 font-bold bg-slate-50 px-2.5 py-1 rounded-md group-hover:bg-slate-100 transition-colors">
                    Operational
                  </span>
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