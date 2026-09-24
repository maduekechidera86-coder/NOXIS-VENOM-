const https = require('https');

function getWeather(city) {
  return new Promise((resolve, reject) => {
    const url =
      `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

    https.get(url, {
      headers: {
        'User-Agent': 'NØXIS-VENOM'
      }
    }, (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);

      res.on('end', () => {
        try {
          if (res.statusCode !== 200) {
            return reject(new Error('Weather unavailable'));
          }

          const result = JSON.parse(data);
          resolve(result);
        } catch {
          reject(new Error('Invalid weather data'));
        }
      });
    }).on('error', reject);
  });
}

module.exports = {
  name: 'weather',
  aliases: ['w'],
  description: 'Show current weather',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Give me a city.\n\nExample: .weather Port Harcourt'
      );
    }

    const city = args.join(' ');

    try {
      const data = await getWeather(city);
      const current = data.current_condition[0];
      const area = data.nearest_area[0];

      const location = area.areaName[0].value;
      const country = area.country[0].value;
      const condition = current.weatherDesc[0].value;
      const temp = current.temp_C;
      const feels = current.FeelsLikeC;
      const humidity = current.humidity;
      const wind = current.windspeedKmph;

      await client.sendText(
        message.from,
        `🌦️ NØXIS WEATHER\n\n` +
        `📍 ${location}, ${country}\n\n` +
        `🌡️ Temperature: ${temp}°C\n` +
        `🥵 Feels like: ${feels}°C\n` +
        `☁️ Condition: ${condition}\n` +
        `💧 Humidity: ${humidity}%\n` +
        `💨 Wind: ${wind} km/h\n\n` +
        `𓊈⸸𓊉 LIVE WEATHER DATA`
      );
    } catch {
      await client.sendText(
        message.from,
        `𓊈⸸𓊉 Could not get weather for "${city}".`
      );
    }
  }
};
