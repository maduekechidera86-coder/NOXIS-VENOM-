const answers = [
  'THE SHADOWS SAY YES.',
  'A NEW PATH IS OPENING.',
  'WAIT. THE TIME IS NOT YET.',
  'TRUST YOUR INSTINCTS.',
  'SOMETHING UNEXPECTED IS COMING.',
  'THE ANSWER LIES IN THE DARK.',
  'YOUR NEXT MOVE MATTERS.',
  'THE FUTURE REMAINS UNKNOWN.'
];

module.exports = {
  name: 'oracle',
  aliases: ['future'],
  description: 'Ask the NØXIS oracle',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Ask the oracle a question.\n\nExample: .oracle will I become a coder?'
      );
    }

    const question = args.join(' ');
    const answer = answers[Math.floor(Math.random() * answers.length)];

    await client.sendText(
      message.from,
      `🔮 NØXIS ORACLE\n\n` +
      `❓ ${question}\n\n` +
      `🌑 ${answer}`
    );
  }
};
