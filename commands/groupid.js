module.exports = {
  name: 'groupid',
  aliases: ['gid'],
  description: 'Show the current group ID',

  async execute({ client, message }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS GROUP ID\n\n` +
      `🆔 ${message.from}\n\n` +
      `Copy this ID for the controlled broadcast list.`
    );
  }
};
