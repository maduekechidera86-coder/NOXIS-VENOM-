const modes = {
  dark: {
    name: 'DARK',
    symbol: '🌑',
    status: 'NØXIS IS HIDING IN THE SHADOWS.'
  },

  shadow: {
    name: 'SHADOW',
    symbol: '👁️',
    status: 'NØXIS PRESENCE: DETECTED.'
  },

  void: {
    name: 'VOID',
    symbol: '⚫',
    status: 'NØXIS HAS ENTERED THE UNKNOWN.'
  }
};

module.exports = {
  name: 'mode',
  aliases: ['modes'],
  description: 'Change the NØXIS display mode',

  async execute({ client, message, args }) {
    const selected = (args[0] || 'dark').toLowerCase();
    const mode = modes[selected];

    if (!mode) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS MODES\n\n` +
        `🌑 dark\n` +
        `👁️ shadow\n` +
        `⚫ void\n\n` +
        `Usage: .mode dark`
      );
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS MODE\n\n` +
      `${mode.symbol} MODE: ${mode.name}\n` +
      `⚡ STATUS: ACTIVE\n\n` +
      `${mode.status}`
    );
  }
};
