export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    thermostat001: { Temperature: 74 },
    light001: { "Is On": true },
    lock001: { "Is Locked": false }
    // Add more devices here
  });
}
