module.exports = {
  name: 'choose',
  aliases: ['pick'],
  description: 'Randomly choose between options',

  async execute({ client, message, args }) {
    if (args.length < 2) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Give me at least 2 options.\n\nExample: .choose pizza burger'
      );
    }

    const choice = args[Math.floor(Math.random() * args.length)];

    await client.sendText(
      message.from,
      `🔀 NØXIS CHOICE\n\nOptions: ${args.join(' • ')}\n\n𓊈⸸𓊉 My choice: ${choice}`
    );
  }
};
