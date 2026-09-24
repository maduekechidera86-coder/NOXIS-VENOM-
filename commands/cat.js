const https = require('https');

function getRandomCat() {
  return new Promise((resolve, reject) => {
    https.get('https://api.thecatapi.com/v1/images/search', (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result[0].url);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

module.exports = {
  name: 'cat',
  aliases: ['kitty'],
  description: 'Send a random cat picture',

  async execute({ client, message }) {
    try {
      const imageUrl = await getRandomCat();

      await client.sendImageFromURL(
        message.from,
        imageUrl,
        'random-cat.jpg',
        '𓊈⸸𓊉 RANDOM CAT 🐈'
      );
    } catch (error) {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not fetch a cat picture right now.'
      );
    }
  }
};
