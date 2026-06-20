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
    <section className="py-24 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Main Form Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(112,0,255,0.08)] relative overflow-hidden">
          
          {/* Subtle decorative glow in top corner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00C2FF] opacity-10 blur-3xl rounded-full pointer-events-none" />

          {/* Header */}
          <div className="mb-10 text-center sm:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Analyze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7000FF] to-[#00C2FF]">Machine</span>
            </h2>
            <p className="text-[#64748B]">
              Enter machine operating parameters for AI-powered health analysis.
            </p>
          </div>

          {/* Demo Scenarios */}
          <div className="mb-10 p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl relative z-10">
            <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-4">
              Quick Fill: Demo Scenarios
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Custom Neon Emerald */}
              <button
                type="button"
                onClick={() => loadSample(healthySample)}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-bold border border-[#00E59B]/40 text-[#00A36C] bg-[#00E59B]/10 hover:bg-[#00E59B]/20 hover:border-[#00E59B] transition-all duration-200 active:scale-95 shadow-[0_0_15px_-3px_rgba(0,229,155,0.15)]"
              >
                Healthy
              </button>
              {/* Custom Electric Amber */}
              <button
                type="button"
                onClick={() => loadSample(warningSample)}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-bold border border-[#FFB800]/40 text-[#D97706] bg-[#FFB800]/10 hover:bg-[#FFB800]/20 hover:border-[#FFB800] transition-all duration-200 active:scale-95 shadow-[0_0_15px_-3px_rgba(255,184,0,0.15)]"
              >
                Warning
              </button>
              {/* Custom Crimson Rose */}
              <button
                type="button"
                onClick={() => loadSample(criticalSample)}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-bold border border-[#FF0055]/40 text-[#E11D48] bg-[#FF0055]/10 hover:bg-[#FF0055]/20 hover:border-[#FF0055] transition-all duration-200 active:scale-95 shadow-[0_0_15px_-3px_rgba(255,0,85,0.15)]"
              >
                Critical
              </button>
            </div>
          </div>

          {/* The Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Company Name */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  placeholder="e.g. Acme Corp"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200"
                />
              </div>

              {/* Machine ID */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Machine ID</label>
                <input
                  type="text"
                  name="machine_id"
                  placeholder="e.g. MAC-001"
                  value={formData.machine_id}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200"
                />
              </div>

              {/* Machine Type */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Machine Type</label>
                <select
                  name="machine_type"
                  value={formData.machine_type}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200 appearance-none"
                >
                  <option value="L">Low Duty Machine (L)</option>
                  <option value="M">Medium Duty Machine (M)</option>
                  <option value="H">Heavy Duty Machine (H)</option>
                </select>
              </div>

              {/* Air Temperature */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Air Temperature <span className="text-[#94A3B8] font-medium">(K)</span></label>
                <input
                  type="number"
                  name="air_temperature"
                  placeholder="298.1"
                  value={formData.air_temperature}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200"
                />
              </div>

              {/* Process Temperature */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Process Temp <span className="text-[#94A3B8] font-medium">(K)</span></label>
                <input
                  type="number"
                  name="process_temperature"
                  placeholder="308.6"
                  value={formData.process_temperature}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200"
                />
              </div>

              {/* Rotational Speed */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Rotational Speed <span className="text-[#94A3B8] font-medium">(RPM)</span></label>
                <input
                  type="number"
                  name="rotational_speed"
                  placeholder="1550"
                  value={formData.rotational_speed}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200"
                />
              </div>

              {/* Torque */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Torque <span className="text-[#94A3B8] font-medium">(Nm)</span></label>
                <input
                  type="number"
                  name="torque"
                  placeholder="42.8"
                  value={formData.torque}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200"
                />
              </div>

              {/* Tool Wear */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-sm font-bold text-[#334155]">Tool Wear <span className="text-[#94A3B8] font-medium">(Minutes)</span></label>
                <input
                  type="number"
                  name="tool_wear"
                  placeholder="0"
                  value={formData.tool_wear}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder:text-[#94A3B8] focus:bg-white focus:ring-2 focus:ring-[#00C2FF]/30 focus:border-[#00C2FF] outline-none transition-all duration-200"
                />
              </div>

            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl border border-[#FF0055]/30 bg-[#FF0055]/10 flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FF0055] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#E11D48] text-sm font-bold">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  w-full py-4 rounded-xl
                  bg-gradient-to-r from-[#7000FF] to-[#00C2FF]
                  text-white font-extrabold text-lg tracking-wide uppercase
                  shadow-[0_8px_20px_-6px_rgba(112,0,255,0.4)]
                  hover:shadow-[0_12px_25px_-6px_rgba(0,194,255,0.5)] hover:-translate-y-0.5
                  active:scale-[0.98] active:translate-y-0
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
                  transition-all duration-300 flex justify-center items-center gap-3
                "
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Analyze Machine"
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