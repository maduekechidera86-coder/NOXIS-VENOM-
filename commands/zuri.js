module.exports = {
  name: 'zuri',
  aliases: ['queen'],
  description: 'Show the special Zuri profile',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS × ZURI\n\n` +
      `👑 ZURI\n` +
      `💍 NIGHTMARE'S WIFE\n` +
      `🖤 QUEEN OF THE SHADOWS\n\n` +
      `STATUS: SPECIAL MEMBER\n` +
      `SYSTEM: PROTECTED`
    );
  }
};
