const statuses = [
  'ALL SYSTEMS ARE RUNNING.',
  'NØXIS CORE IS STABLE.',
  'SHADOW SIGNAL IS STRONG.',
  'NO THREATS DETECTED.',
  'NØXIS IS WATCHING THE SIGNAL.',
  'SYSTEMS ARE FULLY OPERATIONAL.'
];

module.exports = {
  name: 'statusmsg',
  aliases: ['sysmsg'],
  description: 'Show a random NØXIS status message',

  async execute({ client, message }) {
    const status =
      statuses[Math.floor(Math.random() * statuses.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS STATUS\n\n` +
      `⚡ CORE: ONLINE\n` +
      `🌑 MODE: DARK\n` +
      `🕷️ SIGNAL: STABLE\n` +
      `🖤 STATUS: ${status}`
    );
  }
};
