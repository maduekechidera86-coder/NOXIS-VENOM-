module.exports = {
  name: 'pair',
  aliases: [],
  description: 'Show the NØXIS pair',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS PAIR\n\n` +
      `👑 NIGHTMARE × Zuri 💍\n\n` +
      `🖤 PAIR STATUS: CONNECTED\n` +
      `⚡ MATCH: 92%\n` +
      `🌑 NØXIS BOND: ACTIVE`
    );
  }
};
