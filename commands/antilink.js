let enabled = false;

module.exports = {
  name: 'antilink',
  aliases: ['al'],
  description: 'Toggle NØXIS anti-link mode',

  async execute({ client, message, args }) {
    const action = (args[0] || '').toLowerCase();

    if (action === 'on') enabled = true;
    else if (action === 'off') enabled = false;
    else {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS ANTILINK\n\n` +
        `STATUS: ${enabled ? '🟢 ON' : '🔴 OFF'}\n\n` +
        `Use:\n` +
        `.antilink on\n` +
        `.antilink off`
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS ANTILINK\n\n` +
      `🛡️ STATUS: ${enabled ? '🟢 ENABLED' : '🔴 DISABLED'}\n` +
      `🌑 MODE: GROUP PROTECTION`
    );
  }
};
