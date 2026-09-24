function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

module.exports = {
  name: 'uptime',
  aliases: ['up'],
  description: 'Show how long NØXIS has been online',

  async execute({ client, message }) {
    const uptime = formatUptime(process.uptime());

    await client.sendText(
      message.from,
      `╔════════════════════╗\n` +
      `      𓊈⸸𓊉 NØXIS UPTIME\n` +
      `╚════════════════════╝\n\n` +

      `🟢 STATUS: ONLINE\n\n` +
      `⏱️ ONLINE FOR\n` +
      `└─ ${uptime}\n\n` +

      `⚙️ PROCESS\n` +
      `└─ ACTIVE\n\n` +

      `🌑 SYSTEM\n` +
      `└─ STABLE\n\n` +

      `𓊈⸸𓊉 THE SHADOW REMAINS ACTIVE.`
    );
  }
};
