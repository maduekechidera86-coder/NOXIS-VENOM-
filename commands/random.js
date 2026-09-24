module.exports = {
  name: 'random',
  aliases: ['rand'],
  description: 'Generate a random number in a range',

  async execute({ client, message, args }) {
    const min = Number(args[0]);
    const max = Number(args[1]);

    if (!Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Usage: .random 1 100'
      );
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    await client.sendText(
      message.from,
      `🎯 NØXIS RANDOM\n\n𓊈⸸𓊉 Result: ${result}`
    );
  }
};
