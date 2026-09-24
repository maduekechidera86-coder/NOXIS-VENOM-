const lore = [
  'NØXIS was born where the light disappears.',
  'The shadow remembers every name that enters.',
  'NØXIS has no throne. It has a presence.',
  'The darker the night, the stronger the signal.',
  'Those who enter the shadow leave a mark.',
  'The NØXIS core never truly sleeps.',
  'Every legend begins as an unknown signal.',
  'The symbol 𓊈⸸𓊉 marks those who walk through the darkness.'
];

module.exports = {
  name: 'lore',
  aliases: ['story'],
  description: 'Reveal random NØXIS lore',

  async execute({ client, message }) {
    const story = lore[Math.floor(Math.random() * lore.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS LORE\n\n` +
      `📖 ARCHIVE ENTRY\n` +
      `🌑 CLASS: SHADOW\n\n` +
      `╭─[ LORE ]─╮\n` +
      `│ ${story}\n` +
      `╰───────────╯\n\n` +
      `⚡ NØXIS ARCHIVE // ${lore.length} ENTRIES`
    );
  }
};
