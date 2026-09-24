const answers = [
  'YES.',
  'NO.',
  'MAYBE.',
  'DEFINITELY.',
  'NOT LIKELY.',
  'ASK AGAIN.',
  'THE SHADOWS SAY YES.',
  'THE ANSWER IS UNCLEAR.',
  'NØXIS SAYS: TRUST YOUR INSTINCTS.'
];

module.exports = {
  name: '8ball',
  aliases: ['8b', 'ball'],
  description: 'Ask the NØXIS 8-ball a question',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '🎱 Ask me something.\n\nExample: .8ball will I become a coder?'
      );
    }

    const question = args.join(' ');
    const answer = answers[Math.floor(Math.random() * answers.length)];

    await client.sendText(
      message.from,
      `🎱 NØXIS 8-BALL\n\n❓ ${question}\n\n𓊈⸸𓊉 ${answer}`
    );
  }
};
