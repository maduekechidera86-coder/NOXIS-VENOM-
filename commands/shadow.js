module.exports = {
  name: 'shadow',
  aliases: ['sh'],
  description: 'Show the NØXIS shadow identity',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS SHADOW\n\n` +
      `🌑 IDENTITY: UNKNOWN\n` +
      `🖤 MODE: DARK\n` +
      `⚡ STATUS: ACTIVE\n` +
      `👁️ PRESENCE: DETECTED\n\n` +
      `𓊈⸸𓊉 THE SHADOWS ARE WATCHING.`
    );
  }
};
