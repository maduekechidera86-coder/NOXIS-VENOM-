const https = require('https');

function getRandomRabbit() {
  return new Promise((resolve, reject) => {
    https.get('https://rabbit-api.kinduff.com/api/facts', (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result.image);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

module.exports = {
  name: 'rabbit',
  aliases: ['bunny'],
  description: 'Send a random rabbit picture',

  async execute({ client, message }) {
    try {
      const imageUrl = await getRandomRabbit();

      await client.sendImageFromURL(
        message.from,
        imageUrl,
        'random-rabbit.jpg',
        '𓊈⸸𓊉 RANDOM RABBIT 🐰'
      );
    } catch (error) {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not fetch a rabbit picture right now.'
      );
    }
  }
};
