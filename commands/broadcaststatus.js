const approvedGroups = require('../config/broadcastGroups');

module.exports = {
  name: 'broadcaststatus',
  aliases: [],
  description: 'Show broadcast system status',

  async execute({ client, message }) {
    const count = approvedGroups.length;
    const status = count > 0 ? 'READY' : 'NOT CONFIGURED';

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS BROADCAST\n\n` +
      `📡 SYSTEM: ${status}\n` +
      `👥 APPROVED GROUPS: ${count}/4\n` +
      `⚡ LIMIT: 4 GROUPS\n` +
      `⏳ COOLDOWN: 60 SECONDS\n` +
      `🖤 MODE: CONTROLLED\n\n` +
      `STATUS: ${count > 0 ? 'ACTIVE' : 'WAITING FOR GROUPS'}`
    );
  }
};
