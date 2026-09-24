const messages = [
  'THE VOID IS SILENT.',
  'NOTHING WAS FOUND.',
  'THE SIGNAL DISAPPEARED.',
  'THE VOID HAS ACCEPTED THE CONNECTION.',
  'UNKNOWN PRESENCE DETECTED.',
  'THE SHADOWS HAVE ENTERED THE VOID.'
];

module.exports = {
  name: 'void',
  aliases: ['null'],
  description: 'Enter the NØXIS void',

  async execute({ client, message }) {
    const result =
      messages[Math.floor(Math.random() * messages.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS VOID\n\n` +
      `⚫ DIMENSION: VOID\n` +
      `🌑 LIGHT: NONE\n` +
      `📡 SIGNAL: UNKNOWN\n\n` +
      `╭─[ VOID RESPONSE ]─╮\n` +
      `│ ${result}\n` +
      `╰───────────────────╯\n\n` +
      `𓊈⸸𓊉 CONNECTION: ACTIVE`
    );
  }
};
