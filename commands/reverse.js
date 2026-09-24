module.exports = {
  name: 'reverse',
  aliases: ['rev'],
  description: 'Reverse a message',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS REVERSE\n\n` +
        `Usage:\n` +
        `.reverse Your message`
      );
    }

    const text = args.join(' ');
    const reversed = [...text].reverse().join('');

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS REVERSE\n\n` +
      `📝 ORIGINAL:\n${text}\n\n` +
      `🔄 REVERSED:\n${reversed}`
    );
  }
};
