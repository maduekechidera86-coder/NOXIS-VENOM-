const lockedGroups = new Set();

module.exports = {
  name: 'gclock',
  aliases: ['glock', 'lock'],
  description: 'Lock the group',

  async execute({ client, message }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    lockedGroups.add(message.from);

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS GROUP LOCK\n\n` +
      `🔒 GROUP: LOCKED\n` +
      `🛡️ STATUS: ACTIVE\n` +
      `🌑 NØXIS SHIELD: ON`
    );
  },

  lockedGroups
};
