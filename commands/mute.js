const mutedUsers = new Set();

module.exports = {
  name: 'mute',
  aliases: ['shutup'],
  description: 'Mute a group member',

  async execute({ client, message }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    const quoted = message.quotedMsg;

    if (!quoted || !quoted.author) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS MUTE\n\n` +
        `Reply to a member's message and use:\n` +
        `.mute`
      );
    }

    mutedUsers.add(quoted.author);

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS MUTE\n\n` +
      `🔇 MEMBER: @${quoted.author.split('@')[0]}\n` +
      `🛡️ STATUS: MUTED\n` +
      `🌑 NØXIS GROUP SHIELD`
    );
  },

  mutedUsers
};
