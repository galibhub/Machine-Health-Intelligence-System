const BASE_URL = "https://machine-health-api.onrender.com";

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



