import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { predictMachine } from "../../services/api";
import usePredictionStore from "../../services/store";

function PredictionForm() {
  const navigate = useNavigate();

  const { setResult, setStatus, setError, status, error } =
    usePredictionStore();

  const [formData, setFormData] = useState({
    company_name: "",
    machine_id: "",
    machine_type: "M",
    air_temperature: "",
    process_temperature: "",
    rotational_speed: "",
    torque: "",
    tool_wear: "",
  });

  // sample random data
  const healthySample = {
    company_name: "ABC Manufacturing",
    machine_id: "HLT-1001",
    machine_type: "L",
    air_temperature: 295,
    process_temperature: 305,
    rotational_speed: 1400,
    torque: 30,
    tool_wear: 20,
  };

  const warningSample = {
    company_name: "Delta Industries",
    machine_id: "WRN-2001",
    machine_type: "M",
    air_temperature: 299,
    process_temperature: 311,
    rotational_speed: 1700,
    torque: 42,
    tool_wear: 75,
  };

  const criticalSample = {
    company_name: "Prime Engineering",
    machine_id: "CRT-3001",
    machine_type: "H",
    air_temperature: 310,
    process_temperature: 330,
    rotational_speed: 2600,
    torque: 80,
    tool_wear: 220,
  };

  const loadSample = (sample) => {
    setFormData(sample);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setError(null);

    try {
      const result = await predictMachine({
        company_name: formData.company_name,
        machine_id: formData.machine_id,
        machine_type: formData.machine_type,
        air_temperature: Number(formData.air_temperature),
        process_temperature: Number(formData.process_temperature),
        rotational_speed: Number(formData.rotational_speed),
        torque: Number(formData.torque),
        tool_wear: Number(formData.tool_wear),
      });

      console.log("RESULT DATA:", result);

      setResult(result);
      navigate("/result");
    } catch (err) {
      console.error(err);
      setError("Unable to connect to prediction service. Please try again.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="min-h-screen py-24 bg-[#020817] relative overflow-hidden flex items-center justify-center font-sans">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1000px] h-[500px] bg-blue-900/20 blur-[200px] rounded-[100%] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
        {/* Main Form Card */}
        <div className="bg-[#0A1120]/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)] relative overflow-hidden">
          
          {/* Inner Card Glow Corner */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />

          {/* Header */}
          <div className="mb-12 text-center sm:text-left relative z-10 border-b border-slate-800/60 pb-8">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Analyze{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.3)]">
                Machine Health
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Enter industrial telemetry data to run real-time predictive failure analysis using our AI intelligence model.
            </p>
          </div>

          {/* Demo Scenarios Area */}
          <div className="mb-10 p-6 bg-[#040914] border border-cyan-900/40 rounded-2xl relative z-10 shadow-inner">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <p className="text-xs font-bold text-cyan-500/80 uppercase tracking-widest">
                Quick Load Telemetry Profiles
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => loadSample(healthySample)}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-sm font-bold border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all duration-300 active:scale-95 flex justify-center items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Healthy
              </button>
              
              <button
                type="button"
                onClick={() => loadSample(warningSample)}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-sm font-bold border border-amber-500/30 text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)] transition-all duration-300 active:scale-95 flex justify-center items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Warning
              </button>
              
              <button
                type="button"
                onClick={() => loadSample(criticalSample)}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-sm font-bold border border-rose-500/30 text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 hover:border-rose-400 hover:shadow-[0_0_20px_-5px_rgba(244,63,94,0.3)] transition-all duration-300 active:scale-95 flex justify-center items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                Critical
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Company Name */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  placeholder="e.g. CyberDyne Systems"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white placeholder:text-slate-600 focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Machine ID */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide">
                  Machine ID
                </label>
                <input
                  type="text"
                  name="machine_id"
                  placeholder="e.g. MAC-001"
                  value={formData.machine_id}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white placeholder:text-slate-600 focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Machine Type */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide">
                  Machine Type
                </label>
                <div className="relative">
                  <select
                    name="machine_type"
                    value={formData.machine_type}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 appearance-none shadow-inner cursor-pointer"
                  >
                    <option value="L" className="bg-[#0A1120]">Low Duty Machine (L)</option>
                    <option value="M" className="bg-[#0A1120]">Medium Duty Machine (M)</option>
                    <option value="H" className="bg-[#0A1120]">Heavy Duty Machine (H)</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-cyan-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Air Temperature */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide flex justify-between">
                  <span>Air Temperature</span>
                  <span className="text-cyan-500/50 font-mono text-xs mt-0.5">KELVIN [K]</span>
                </label>
                <input
                  type="number"
                  name="air_temperature"
                  placeholder="298.1"
                  value={formData.air_temperature}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white font-mono placeholder:text-slate-700 focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Process Temperature */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide flex justify-between">
                  <span>Process Temp</span>
                  <span className="text-cyan-500/50 font-mono text-xs mt-0.5">KELVIN [K]</span>
                </label>
                <input
                  type="number"
                  name="process_temperature"
                  placeholder="308.6"
                  value={formData.process_temperature}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white font-mono placeholder:text-slate-700 focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Rotational Speed */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide flex justify-between">
                  <span>Rotational Speed</span>
                  <span className="text-cyan-500/50 font-mono text-xs mt-0.5">REVS/MIN [RPM]</span>
                </label>
                <input
                  type="number"
                  name="rotational_speed"
                  placeholder="1550"
                  value={formData.rotational_speed}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white font-mono placeholder:text-slate-700 focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Torque */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide flex justify-between">
                  <span>Torque</span>
                  <span className="text-cyan-500/50 font-mono text-xs mt-0.5">NEWTON-METERS [Nm]</span>
                </label>
                <input
                  type="number"
                  name="torque"
                  placeholder="42.8"
                  value={formData.torque}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white font-mono placeholder:text-slate-700 focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Tool Wear */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-300 tracking-wide flex justify-between">
                  <span>Tool Wear</span>
                  <span className="text-cyan-500/50 font-mono text-xs mt-0.5">MINUTES [Min]</span>
                </label>
                <input
                  type="number"
                  name="tool_wear"
                  placeholder="0"
                  value={formData.tool_wear}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#040914] border border-slate-800/80 text-white font-mono placeholder:text-slate-700 focus:bg-[#0A1120] focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 outline-none transition-all duration-300 shadow-inner"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 backdrop-blur-sm flex items-start gap-3 shadow-[0_0_20px_-5px_rgba(244,63,94,0.2)]">
                <svg
                  className="w-5 h-5 text-rose-500 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p className="text-rose-400 text-sm font-semibold tracking-wide">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  group w-full py-5 rounded-xl
                  bg-gradient-to-r from-cyan-500 to-emerald-500
                  text-[#020817] font-black text-lg tracking-[0.15em] uppercase
                  shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]
                  hover:shadow-[0_0_50px_-5px_rgba(6,182,212,0.6)]
                  hover:scale-[1.01] active:scale-[0.98]
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
                  transition-all duration-300 flex justify-center items-center gap-3
                  relative overflow-hidden
                "
              >
                {/* Button Inner Shine */}
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-6 w-6 text-[#020817]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Initializing Scan...
                  </>
                ) : (
                  <>
                    Execute Diagnostics
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PredictionForm;