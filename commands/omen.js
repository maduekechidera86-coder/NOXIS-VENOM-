const omens = [
  'THE NIGHT IS NOT OVER.',
  'SOMETHING IS APPROACHING.',
  'DO NOT IGNORE THE SIGN.',
  'THE SHADOWS HAVE SPOKEN.',
  'YOUR NEXT MOVE WILL MATTER.',
  'A CHANGE IS COMING.',
  'THE SILENCE MEANS SOMETHING.',
  'THE UNKNOWN IS CLOSER THAN YOU THINK.'
];

module.exports = {
  name: 'omen',
  aliases: ['sign'],
  description: 'Reveal a random NØXIS omen',

  async execute({ client, message }) {
    const omen = omens[Math.floor(Math.random() * omens.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS OMEN\n\n` +
      `🌑 SIGNAL: DETECTED\n` +
      `👁️ SOURCE: UNKNOWN\n` +
      `⚡ STATUS: ACTIVE\n\n` +
      `╭─[ THE OMEN ]─╮\n` +
      `│ ${omen}\n` +
      `╰──────────────╯`
    );
  }
};
