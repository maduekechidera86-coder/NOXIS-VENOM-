module.exports = {
  name: 'identity',
  aliases: ['id'],
  description: 'Show the NØXIS identity',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS IDENTITY\n\n` +
      `👁️ NAME: NØXIS VENOM\n` +
      `🌑 CLASS: SHADOW SYSTEM\n` +
      `⚡ STATUS: ACTIVE\n` +
      `🕷️ CORE: VENOM\n` +
      `🖤 MODE: DARK\n\n` +
      `𓊈⸸𓊉 ENTER THE SHADOW`
    );
  }
};
