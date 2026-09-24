module.exports = {
  name: 'king',
  aliases: ['nightmare'],
  description: 'Show the NØXIS king profile',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS × NIGHTMARE\n\n` +
      `👑 NIGHTMARE\n` +
      `🖤 KING OF THE SHADOWS\n` +
      `💍 ZURI'S HUSBAND\n\n` +
      `STATUS: KING\n` +
      `SYSTEM: ONLINE`
    );
  }
};
