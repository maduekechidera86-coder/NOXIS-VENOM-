const https = require('https');

function shortenUrl(url) {
  return new Promise((resolve, reject) => {
    const api = `https://is.gd/create.php?format=simple&url=${encodeURIComponent(url)}`;

    https.get(api, (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);

      res.on('end', () => {
        if (res.statusCode !== 200 || !data.startsWith('http')) {
          return reject(new Error('Could not shorten URL'));
        }

        resolve(data.trim());
      });
    }).on('error', reject);
  });
}

module.exports = {
  name: 'shorten',
  aliases: ['short'],
  description: 'Shorten a URL',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Give me a URL.\n\nExample: .shorten https://example.com'
      );
    }

    const url = args[0];

    try {
      new URL(url);
    } catch {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 That does not look like a valid URL.'
      );
    }

    try {
      const shortUrl = await shortenUrl(url);

      await client.sendText(
        message.from,
        `🔗 NØXIS URL SHORTENER\n\n` +
        `Original:\n${url}\n\n` +
        `𓊈⸸𓊉 Shortened:\n${shortUrl}`
      );
    } catch {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Could not shorten that URL right now.'
      );
    }
  }
};
