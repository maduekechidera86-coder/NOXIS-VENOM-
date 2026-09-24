const glitches = [
  'SYSTEM ERROR // UNKNOWN SIGNAL',
  'NØXIS CORE // MEMORY DESYNC',
  'SIGNAL LOST // RECONNECTING...',
  'REALITY.EXE // NOT RESPONDING',
  'SHADOW PROTOCOL // ACTIVATED',
  'UNKNOWN PROCESS // RUNNING',
  'NØXIS NETWORK // SIGNAL CORRUPTED',
  'VOID CONNECTION // ESTABLISHED',
  'SYSTEM // SOMETHING IS WATCHING'
];

module.exports = {
  name: 'glitch',
  aliases: ['glitcher'],
  description: 'Generate a random NØXIS glitch',

  async execute({ client, message }) {
    const glitch =
      glitches[Math.floor(Math.random() * glitches.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS // GLITCH\n\n` +
      `⚠️ SYSTEM: UNSTABLE\n` +
      `🌑 MODE: DARK\n` +
      `⚡ SIGNAL: CORRUPTED\n\n` +
      `╭─[ GLITCH DETECTED ]─╮\n` +
      `│ ${glitch}\n` +
      `╰─────────────────────╯\n\n` +
      `𓊈⸸𓊉 NØXIS CORE STILL ACTIVE`
    );
  }
};
