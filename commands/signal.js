const signals = [
  'SIGNAL STABLE.',
  'SHADOW SIGNAL DETECTED.',
  'SIGNAL STRENGTH: MAXIMUM.',
  'DARK FREQUENCY ACTIVE.',
  'UNKNOWN SIGNAL RECEIVED.',
  'SIGNAL LOST... RECONNECTED.',
  'NØXIS FREQUENCY LOCKED.'
];

module.exports = {
  name: 'signal',
  aliases: ['sig'],
  description: 'Check the NØXIS signal',

  async execute({ client, message }) {
    const signal =
      signals[Math.floor(Math.random() * signals.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS SIGNAL\n\n` +
      `📡 FREQUENCY: NØXIS\n` +
      `🌑 CHANNEL: SHADOW\n` +
      `⚡ STATUS: ACTIVE\n\n` +
      `╭─[ SIGNAL ]─╮\n` +
      `│ ${signal}\n` +
      `╰────────────╯`
    );
  }
};
