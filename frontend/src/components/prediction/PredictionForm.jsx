import { useState } from "react";
import { predictMachine } from "../../services/api";
import usePredictionStore from "../../services/store";
import { useNavigate } from "react-router-dom";

function PredictionForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setResult = usePredictionStore((state) => state.setResult);

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

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      setResult(result);

      navigate("/result");

      console.log("Prediction Success");
      console.log(result);
    } catch (error) {
      console.error("Prediction Error:", error);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="
            bg-[var(--bg-secondary)]
            border border-[var(--border)]
            rounded-2xl
            p-8
          "
        >
          <h2 className="text-3xl font-bold mb-8">Analyze Machine</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            />

            <input
              type="text"
              name="machine_id"
              placeholder="Machine ID"
              value={formData.machine_id}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            />

            <select
              name="machine_type"
              value={formData.machine_type}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            >
              <option value="L">Low (L)</option>
              <option value="M">Medium (M)</option>
              <option value="H">High (H)</option>
            </select>

            <input
              type="number"
              name="air_temperature"
              placeholder="Air Temperature (K)"
              value={formData.air_temperature}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            />

            <input
              type="number"
              name="process_temperature"
              placeholder="Process Temperature (K)"
              value={formData.process_temperature}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            />

            <input
              type="number"
              name="rotational_speed"
              placeholder="Rotational Speed (RPM)"
              value={formData.rotational_speed}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            />

            <input
              type="number"
              name="torque"
              placeholder="Torque (Nm)"
              value={formData.torque}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            />

            <input
              type="number"
              name="tool_wear"
              placeholder="Tool Wear (Min)"
              value={formData.tool_wear}
              onChange={handleChange}
              className="
                w-full p-3 rounded-xl
                bg-[var(--bg-primary)]
                border border-[var(--border)]
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
    w-full
    py-3
    rounded-xl
    bg-[var(--accent)]
    font-semibold
    hover:opacity-90
    transition
    disabled:opacity-50
  "
            >
              {loading ? "Analyzing..." : "Analyze Machine"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PredictionForm;
