const https = require('https');

function getRandomDog() {
  return new Promise((resolve, reject) => {
    https.get('https://random.dog/woof.json', (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result.url);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

module.exports = {
  name: 'dog',
  aliases: ['puppy'],
  description: 'Send a random dog picture',

  async execute({ client, message }) {
    try {
      const imageUrl = await getRandomDog();

      if (!/\.(jpg|jpeg|png|webp)$/i.test(imageUrl)) {
        return await client.sendText(
          message.from,
          '𓊈⸸𓊉 NØXIS DOG\n\nNo picture found. Try again.'
        );
      }

      await client.sendImageFromURL(
        message.from,
        imageUrl,
        'random-dog.jpg',
        '𓊈⸸𓊉 RANDOM DOG 🐕'
      );
    } catch (error) {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not fetch a dog picture right now.'
      );
    }
  }
};
