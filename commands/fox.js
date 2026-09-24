const https = require('https');

function getRandomFox() {
  return new Promise((resolve, reject) => {
    https.get('https://randomfox.ca/floof/', (res) => {
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
  name: 'fox',
  aliases: ['foxy'],
  description: 'Send a random fox picture',

  async execute({ client, message }) {
    try {
      const imageUrl = await getRandomFox();

      await client.sendImageFromURL(
        message.from,
        imageUrl,
        'random-fox.jpg',
        '𓊈⸸𓊉 RANDOM FOX 🦊'
      );
    } catch (error) {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not fetch a fox picture right now.'
      );
    }
  }
};
