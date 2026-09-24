const https = require('https');

function getRandomKoala() {
  return new Promise((resolve, reject) => {
    https.get('https://some-random-api.com/animal/koala', (res) => {
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
  name: 'koala',
  aliases: ['ko'],
  description: 'Send a random koala picture',

  async execute({ client, message }) {
    try {
      const imageUrl = await getRandomKoala();

      await client.sendImageFromURL(
        message.from,
        imageUrl,
        'random-koala.jpg',
        '𓊈⸸𓊉 RANDOM KOALA 🐨'
      );
    } catch (error) {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not fetch a koala picture right now.'
      );
    }
  }
};
