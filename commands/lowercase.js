module.exports = {
  name: 'lowercase',
  aliases: ['lower', 'downcase'],
  description: 'Convert text to lowercase',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS LOWERCASE\n\n` +
        `Usage:\n` +
        `.lowercase Your message`
      );
    }

    const text = args.join(' ');

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS LOWERCASE\n\n` +
      `${text.toLowerCase()}`
    );
  }
};
