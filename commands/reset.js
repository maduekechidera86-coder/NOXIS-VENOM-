module.exports = {
  name: 'reset',
  aliases: ['reboot'],
  description: 'Show the NØXIS reset status',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS SYSTEM RESET\n\n` +
      `⚡ CORE: STANDBY\n` +
      `🌑 SHADOW: PRESERVED\n` +
      `🖤 DATA: SAFE\n` +
      `🔄 STATUS: RESET COMPLETE\n\n` +
      `𓊈⸸𓊉 NØXIS IS BACK ONLINE.`
    );
  }
};
