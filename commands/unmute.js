const muteCommand = require('./mute');

module.exports = {
  name: 'unmute',
  aliases: ['unshutup'],
  description: 'Unmute a group member',

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
        `𓊈⸸𓊉 NØXIS UNMUTE\n\n` +
        `Reply to a member's message and use:\n` +
        `.unmute`
      );
    }

    muteCommand.mutedUsers.delete(quoted.author);

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS UNMUTE\n\n` +
      `🔊 MEMBER: @${quoted.author.split('@')[0]}\n` +
      `🟢 STATUS: UNMUTED\n` +
      `🌑 NØXIS GROUP SHIELD`
    );
  }
};
