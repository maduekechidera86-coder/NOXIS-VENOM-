module.exports = {
  name: 'calc',
  aliases: ['calculate'],
  description: 'Calculate a basic math expression',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Give me a calculation.\n\nExample: .calc 25 * 4'
      );
    }

    const expression = args.join(' ');

    if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Only basic numbers and math operators are allowed.'
      );
    }

    try {
      const result = Function(`"use strict"; return (${expression})`)();

      if (!Number.isFinite(result)) {
        throw new Error('Invalid result');
      }

      await client.sendText(
        message.from,
        `🧮 NØXIS CALCULATOR\n\n` +
        `📌 ${expression}\n\n` +
        `𓊈⸸𓊉 Result: ${result}`
      );
    } catch {
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Invalid calculation.'
      );
    }
  }
};
