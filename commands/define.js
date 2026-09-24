const https = require('https');

function getDefinition(word) {
  return new Promise((resolve, reject) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;

    https.get(url, (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);

      res.on('end', () => {
        try {
          if (res.statusCode !== 200) {
            return reject(new Error('Word not found'));
          }

          const result = JSON.parse(data);
          const entry = result[0];

          const meaning = entry.meanings[0];
          const definition = meaning.definitions[0].definition;
          const example = meaning.definitions[0].example;

          resolve({
            word: entry.word,
            partOfSpeech: meaning.partOfSpeech,
            definition,
            example
          });
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

module.exports = {
  name: 'define',
  aliases: ['meaning', 'def'],
  description: 'Define an English word',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Give me a word.\n\nExample: .define nightmare'
      );
    }

    const word = args[0];

    try {
      const result = await getDefinition(word);

      let text =
        `📖 NØXIS DICTIONARY\n\n` +
        `🔤 Word: ${result.word}\n` +
        `🏷️ Type: ${result.partOfSpeech}\n\n` +
        `𓊈⸸𓊉 Definition:\n${result.definition}`;

      if (result.example) {
        text += `\n\n💬 Example:\n${result.example}`;
      }

      await client.sendText(message.from, text);
    } catch {
      await client.sendText(
        message.from,
        `𓊈⸸𓊉 I couldn't find a definition for "${word}".`
      );
    }
  }
};
