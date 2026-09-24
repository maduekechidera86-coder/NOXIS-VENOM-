const stages = [
  'INITIALIZING NØXIS CORE...',
  'UPGRADING SHADOW PROTOCOL...',
  'DARK SIGNAL STRENGTHENED...',
  'NØXIS EVOLUTION COMPLETE.',
  'NEW FORM DETECTED...'
];

module.exports = {
  name: 'evolve',
  aliases: ['upgrade'],
  description: 'Show a random NØXIS evolution',

  async execute({ client, message }) {
    const stage = stages[Math.floor(Math.random() * stages.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS EVOLUTION\n\n` +
      `⚡ CORE: EVOLVING\n` +
      `🌑 MODE: DARK\n` +
      `🧬 STAGE: ${stage}\n\n` +
      `STATUS: UPGRADE COMPLETE`
    );
  }
};
