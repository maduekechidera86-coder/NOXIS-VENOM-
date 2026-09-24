module.exports = {
  name: 'uppercase',
  aliases: ['upper', 'upcase'],
  description: 'Convert text to uppercase',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𖡃𓊉 NØXIS UPPERCASE\n\n` +
        `Usage:\n` +
        `.uppercase Your message`
      );
    }

    const text = args.join(' ');

    await client.sendText(
      message.from,
      `𓊈⸸𖡃𓊉 NØXIS UPPERCASE\n\n` +
      `${text.toUpperCase()}`
    );
  }
};
