const os = require('os');
const { loadCommands } = require('../config/commandLoader');
const settings = require('../config/settings');

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
  name: 'status',
  aliases: ['sys', 'system'],
  description: 'Show NØXIS system status',

  async execute({ client, message }) {
    const commands = loadCommands();
    const uniqueCommands = new Set(
      [...commands.values()].map(command => command.name)
    );

    const uptime = formatUptime(process.uptime());
    const memory = process.memoryUsage();
    const memoryMB = (memory.rss / 1024 / 1024).toFixed(1);

    await client.sendText(
      message.from,
      `╔════════════════════╗\n` +
      `      𓊈⸸𓊉 NØXIS SYSTEM\n` +
      `╚════════════════════╝\n\n` +

      `🕷️ BOT\n` +
      `└─ ${settings.botName}\n\n` +

      `🟢 STATUS\n` +
      `└─ ONLINE\n\n` +

      `⚙️ SYSTEM\n` +
      `├─ Node.js: ${process.version}\n` +
      `├─ Platform: ${process.platform}\n` +
      `├─ Architecture: ${process.arch}\n` +
      `└─ RAM: ${memoryMB} MB\n\n` +

      `📦 COMMANDS\n` +
      `└─ ${uniqueCommands.size} loaded\n\n` +

      `🌑 MODE\n` +
      `└─ ${settings.mode.toUpperCase()}\n\n` +

      `⏱️ UPTIME\n` +
      `└─ ${uptime}\n\n` +

      `𓊈⸸𓊉 SYSTEM: STABLE\n` +
      `𓊈⸸𓊉 NØXIS IS WATCHING`
    );
  }
};
