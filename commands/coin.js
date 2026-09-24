const sides = ['HEADS', 'TAILS'];

module.exports = {
  name: 'coin',
  aliases: ['flip'],
  description: 'Flip a coin',

  async execute({ client, message }) {
    const result = sides[Math.floor(Math.random() * sides.length)];

    await client.sendText(
      message.from,
      `🪙 NØXIS COIN\n\n𓊈⸸𓊉 ${result}`
    );
  }
};
