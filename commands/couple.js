module.exports = {
  name: 'couple',
  aliases: ['duo'],
  description: 'Show the NØXIS couple profile',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS COUPLE\n\n` +
      `👑 NIGHTMARE × ZURI 👑\n\n` +
      `🖤 KING: NIGHTMARE\n` +
      `🤍 QUEEN: ZURI\n\n` +
      `𓊈⸸𓊉 STATUS: TOGETHER\n` +
      `𓊈⸸𓊉 SYSTEM: UNBREAKABLE`
    );
  }
};
