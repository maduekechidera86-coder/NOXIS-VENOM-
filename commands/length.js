module.exports = {
  name: 'length',
  aliases: ['len'],
  description: 'Count message characters and words',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS LENGTH\n\n` +
        `Usage:\n` +
        `.length Your message`
      );
    }

    const text = args.join(' ');
    const characters = [...text].length;
    const words = text.trim().split(/\s+/).length;

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS LENGTH\n\n` +
      `📝 TEXT: ${text}\n\n` +
      `🔤 CHARACTERS: ${characters}\n` +
      `📖 WORDS: ${words}`
    );
  }
};
