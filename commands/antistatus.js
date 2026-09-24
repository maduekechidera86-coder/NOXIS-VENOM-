module.exports = {
  name: 'antistatus',
  aliases: ['as'],
  description: 'Show NØXIS anti-protection status',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS PROTECTION STATUS\n\n` +
      `🔗 ANTILINK: 🟢 READY\n` +
      `👥 ANTIMENTION: 🟢 READY\n\n` +
      `🛡️ GROUP SHIELD: ACTIVE\n` +
      `🌑 MODE: DARK\n` +
      `⚡ SYSTEM: ONLINE`
    );
  }
};
