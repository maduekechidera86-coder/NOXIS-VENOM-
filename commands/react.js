const settingsManager = require('../config/settingsManager');

module.exports = {
  name: 'react',
  aliases: ['reaction'],
  description: 'Show or change the NØXIS reaction',

  async execute({ client, message, args }) {
    if (!args.length) {
      const reaction = settingsManager.getReaction();
      const enabled = settingsManager.isReactionEnabled();

      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS REACTION\n\n` +
        `⚙️ Status: ${enabled ? 'ON 🟢' : 'OFF 🔴'}\n` +
        `🕷️ Reaction: ${reaction}\n\n` +
        `Usage:\n` +
        `.react on\n` +
        `.react off\n` +
        `.react 🖤`
      );
    }

    const input = args[0].toLowerCase();

    if (input === 'on') {
      settingsManager.setReactionEnabled(true);

      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Reaction system: ON 🟢'
      );
    }

    if (input === 'off') {
      settingsManager.setReactionEnabled(false);

      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Reaction system: OFF 🔴'
      );
    }

    settingsManager.setReaction(args[0]);

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 Reaction changed to: ${args[0]}`
    );
  }
};
