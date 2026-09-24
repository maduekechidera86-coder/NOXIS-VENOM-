const approvedGroups = require('../config/broadcastGroups');

module.exports = {
  name: 'bcgroups',
  aliases: ['bcg'],
  description: 'Show approved broadcast group count',

  async execute({ client, message }) {
    const count = approvedGroups.length;

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS BC GROUPS\n\n` +
      `👥 APPROVED: ${count}/4\n` +
      `📡 SYSTEM: ${count ? 'READY' : 'EMPTY'}\n` +
      `⚡ LIMIT: 4 GROUPS\n` +
      `⏳ COOLDOWN: 60 SECONDS\n\n` +
      `🌑 MODE: CONTROLLED`
    );
  }
};
