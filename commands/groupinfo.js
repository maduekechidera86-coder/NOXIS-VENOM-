module.exports = {
  name: 'groupinfo',
  aliases: ['ginfo'],
  description: 'Show basic group information',

  async execute({ client, message }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    try {
      const info = await client.getGroupInfo(message.from);

      await client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS GROUP INFO\n\n` +
        `👥 NAME: ${info.name || 'Unknown'}\n` +
        `🆔 ID: ${message.from}\n` +
        `👤 MEMBERS: ${info.participants?.length || 0}\n` +
        `🛡️ ADMINS: ${info.participants?.filter(p => p.isAdmin || p.isSuperAdmin).length || 0}\n\n` +
        `🌑 NØXIS VENOM`
      );
    } catch (error) {
      await client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS GROUP INFO\n\n` +
        `⚠️ Unable to retrieve group information.`
      );
    }
  }
};
