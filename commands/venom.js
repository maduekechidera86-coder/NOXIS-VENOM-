const lines = [
  'THE SHADOW HAS AWAKENED.',
  'NO SIGNAL. NO FEAR. ONLY NØXIS.',
  'THE NIGHT IS LISTENING.',
  'SYSTEMS QUIET. SHADOWS ACTIVE.',
  'WELCOME TO THE DARK SIDE OF NØXIS.',
  'THE VENOM MOVES IN SILENCE.',
  'NØXIS NEVER SLEEPS.'
];

module.exports = {
  name: 'venom',
  aliases: ['v'],
  description: 'Show the NØXIS VENOM identity',

  async execute({ client, message }) {
    const line = lines[Math.floor(Math.random() * lines.length)];

    await client.sendText(
      message.from,
      `╔════════════════════╗\n` +
      `       🕷️ NØXIS VENOM\n` +
      `╚════════════════════╝\n\n` +

      `𓊈⸸𓊉 IDENTITY: VENOM\n` +
      `🌑 MODE: DARK\n` +
      `🟢 STATUS: ACTIVE\n\n` +

      `「 ${line} 」\n\n` +

      `𓊈⸸𓊉 NØXIS VENOM`
    );
  }
};
