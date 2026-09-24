const reactions = [
  'Absolutely legendary. 👑',
  'Not bad at all. 🕷️',
  'That is actually clean. 🖤',
  'NØXIS approves. 𓊈⸸𓊉',
  'Could be better. 😭',
  'Dangerously good. 💀',
  'Certified W. 🏆',
  'Straight out of the shadows. 🌑',
  'Needs a little upgrade. ⚙️',
  'That score is crazy. 🔥'
];

module.exports = {
  name: 'rate',
  aliases: ['rating'],
  description: 'Give a random rating',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Tell me what to rate.\n\nExample: .rate my coding'
      );
    }

    const target = args.join(' ');
    const rating = Math.floor(Math.random() * 101);
    const reaction = reactions[Math.floor(Math.random() * reactions.length)];

    await client.sendText(
      message.from,
      `⭐ NØXIS RATING\n\n` +
      `🎯 ${target}\n\n` +
      `𓊈⸸𓊉 Rating: ${rating}/100\n` +
      `💬 ${reaction}`
    );
  }
};
