module.exports = {
  name: 'count',
  aliases: ['counttext'],
  description: 'Count words and characters in text',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Give me some text to count.\n\nExample: .count NØXIS is watching'
      );
    }

    const text = args.join(' ');
    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const numbers = (text.match(/\d/g) || []).length;

    await client.sendText(
      message.from,
      `🔢 NØXIS COUNTER\n\n` +
      `📝 Text: ${text}\n\n` +
      `🔤 Words: ${words}\n` +
      `🔡 Characters: ${characters}\n` +
      `📏 Without spaces: ${charactersNoSpaces}\n` +
      `🔢 Numbers: ${numbers}\n\n` +
      `𓊈⸸𓊉 ANALYSIS COMPLETE`
    );
  }
};
