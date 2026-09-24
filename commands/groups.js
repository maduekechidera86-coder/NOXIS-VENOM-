const approvedGroups = require('../config/broadcastGroups');

module.exports = {
  name: 'groups',
  aliases: ['grouplist', 'glist'],
  description: 'Show approved broadcast groups',

  async execute({ client, message }) {
    if (!approvedGroups.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS BROADCAST GROUPS\n\n` +
        `📡 Approved groups: 0/4\n` +
        `⚠️ No groups have been added yet.`
      );
    }

    const list = approvedGroups
      .map((id, index) => `${index + 1}. ${id}`)
      .join('\n');

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS BROADCAST GROUPS\n\n` +
      `📡 Approved: ${approvedGroups.length}/4\n\n` +
      `${list}`
    );
  }
};
