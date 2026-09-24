const https = require('https');

function getRandomBird() {
  return new Promise((resolve, reject) => {
    https.get('https://some-random-api.com/animal/bird', (res) => {
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
  name: 'bird',
  aliases: ['birb'],
  description: 'Send a random bird picture',

  async execute({ client, message }) {
    try {
      const imageUrl = await getRandomBird();

      await client.sendImageFromURL(
        message.from,
        imageUrl,
        'random-bird.jpg',
        '𓊈⸸𓊉 RANDOM BIRD 🐦'
      );
    } catch (error) {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not fetch a bird picture right now.'
      );
    }
  }
};
