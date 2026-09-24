module.exports = {
  name: 'echo',
  aliases: ['say'],
  description: 'Make NØXIS repeat a message',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS ECHO\n\n` +
        `Usage:\n` +
        `.echo Your message`
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS ECHO\n\n` +
      `${args.join(' ')}`
    );
  }
};
