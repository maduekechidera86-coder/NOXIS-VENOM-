let enabled = false;

module.exports = {
  name: 'antigroup',
  aliases: ['ag'],
  description: 'Toggle NØXIS group protection',

  async execute({ client, message, args }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    const action = (args[0] || '').toLowerCase();

    if (action === 'on') enabled = true;
    else if (action === 'off') enabled = false;
    else {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS ANTIGROUP\n\n` +
        `STATUS: ${enabled ? '🟢 ON' : '🔴 OFF'}\n\n` +
        `Use:\n` +
        `.antigroup on\n` +
        `.antigroup off`
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS ANTIGROUP\n\n` +
      `🛡️ PROTECTION: ${enabled ? '🟢 ENABLED' : '🔴 DISABLED'}\n` +
      `🌑 MODE: GROUP\n` +
      `⚡ STATUS: ACTIVE`
    );
  }
};
