// example: serverless endpoint
export async function handler(event, context) {
  const res = await fetch("https://api.thingspeak.com/channels/2992938/fields/2/last.json?api_key=T4IH7M7HYC5JEC77");
  const data = await res.json();

  const json = {
    thermostat001: {
      Temperature: parseFloat(data.field2)
    }
  };

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(json)
  };
}
