module.exports = {
  name: 'darkmode',
  aliases: ['dark'],
  description: 'Show the NØXIS dark mode status',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS DARK MODE\n\n` +
      `🌑 MODE: DARK\n` +
      `🖤 THEME: SHADOW\n` +
      `⚡ CORE: ACTIVE\n` +
      `🕷️ SYSTEM: ONLINE\n\n` +
      `STATUS: DARK MODE ENABLED`
    );
  }
};
