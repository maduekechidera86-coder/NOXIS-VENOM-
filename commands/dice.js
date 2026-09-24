module.exports = {
  name: 'dice',
  aliases: ['roll'],
  description: 'Roll a random six-sided dice',

  async execute({ client, message }) {
    const result = Math.floor(Math.random() * 6) + 1;

    await client.sendText(
      message.from,
      `🎲 NØXIS DICE\n\n𓊈⸸𓊉 You rolled: ${result}`
    );
  }
};
