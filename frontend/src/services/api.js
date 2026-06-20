const BASE_URL = "http://127.0.0.1:8000";

export async function predictMachine(machineData) {
  const response = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(machineData),
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}