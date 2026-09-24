module.exports = {
  name: 'groupstatus',
  aliases: ['gstatus'],
  description: 'Show the current group status',

  async execute({ client, message }) {
    const isGroup = message.isGroup;

    if (!isGroup) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS GROUP STATUS\n\n` +
        `⚠️ This command can only be used inside a group.\n\n` +
        `STATUS: NOT A GROUP`
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS GROUP STATUS\n\n` +
      `🖤 GROUP: ACTIVE\n` +
      `⚡ BOT: ONLINE\n` +
      `🌑 MODE: DARK\n` +
      `🕷️ SYSTEM: STABLE\n` +
      `📡 CONNECTION: ACTIVE\n\n` +
      `STATUS: NØXIS IS WATCHING`
    );
  }
};
