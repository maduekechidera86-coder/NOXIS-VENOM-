const https = require('https');

function getRandomPanda() {
  return new Promise((resolve, reject) => {
    https.get('https://some-random-api.com/animal/panda', (res) => {
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
  name: 'panda',
  aliases: ['pando'],
  description: 'Send a random panda picture',

  async execute({ client, message }) {
    try {
      const imageUrl = await getRandomPanda();

      await client.sendImageFromURL(
        message.from,
        imageUrl,
        'random-panda.jpg',
        '𓊈⸸𓊉 RANDOM PANDA 🐼'
      );
    } catch (error) {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not fetch a panda picture right now.'
      );
    }
  }
};
