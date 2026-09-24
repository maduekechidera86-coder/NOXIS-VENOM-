module.exports = {
  name: 'ship',
  aliases: ['love'],
  description: 'Generate a random compatibility percentage',

  async execute({ client, message, args }) {
    if (args.length < 2) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Give me 2 names.\n\nExample: .ship Alex Zuri'
      );
    }

    const person1 = args[0];
    const person2 = args[1];
    const percentage = Math.floor(Math.random() * 101);

    await client.sendText(
      message.from,
      `💘 NØXIS SHIP\n\n` +
      `👤 ${person1} × ${person2}\n\n` +
      `𓊈⸸𓊉 Compatibility: ${percentage}%`
    );
  }
};
