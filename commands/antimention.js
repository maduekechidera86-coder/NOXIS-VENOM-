let enabled = false;

module.exports = {
  name: 'antimention',
  aliases: ['am'],
  description: 'Toggle NØXIS anti-mention mode',

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
        `𓊈⸸𓊉 NØXIS ANTI-MENTION\n\n` +
        `STATUS: ${enabled ? '🟢 ON' : '🔴 OFF'}\n\n` +
        `Use:\n` +
        `.antimention on\n` +
        `.antimention off`
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS ANTI-MENTION\n\n` +
      `🛡️ STATUS: ${enabled ? '🟢 ENABLED' : '🔴 DISABLED'}\n` +
      `🌑 MODE: GROUP PROTECTION\n` +
      `⚡ SYSTEM: READY`
    );
  }
};
