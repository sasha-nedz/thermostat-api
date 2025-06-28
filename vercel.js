{
  "version": 2,
  "builds": [
    { "src": "api/thermostat.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/thermostat", "dest": "api/thermostat.js" }
  ]
}
