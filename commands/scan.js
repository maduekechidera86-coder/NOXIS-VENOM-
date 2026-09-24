const results = [
  'NO ANOMALIES DETECTED.',
  'SHADOW SIGNAL DETECTED.',
  'UNKNOWN DATA FRAGMENT FOUND.',
  'NØXIS CORE IS STABLE.',
  'DARK SIGNAL: 100% ACTIVE.',
  'SCAN COMPLETE // SYSTEM CLEAR.'
];

module.exports = {
  name: 'scan',
  aliases: ['check'],
  description: 'Run a fictional NØXIS system scan',

  async execute({ client, message }) {
    const result =
      results[Math.floor(Math.random() * results.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS SCAN\n\n` +
      `🔍 SCANNING CORE...\n` +
      `⚡ ANALYZING SIGNAL...\n` +
      `🌑 CHECKING SHADOW...\n\n` +
      `╭─[ RESULT ]─╮\n` +
      `│ ${result}\n` +
      `╰────────────╯\n\n` +
      `🕷️ SCAN COMPLETE`
    );
  }
};
