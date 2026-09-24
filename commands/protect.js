module.exports = {
  name: 'protect',
  aliases: ['shield'],
  description: 'Show NØXIS group protection status',

  async execute({ client, message }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS GROUP SHIELD\n\n` +
      `🛡️ SHIELD: ACTIVE\n` +
      `🌑 MODE: DARK\n` +
      `⚡ MONITOR: ONLINE\n` +
      `📡 SIGNAL: STABLE\n\n` +
      `STATUS: GROUP PROTECTION READY`
    );
  }
};
