const cooldowns = new Map();
const COOLDOWN = 30000;

module.exports = {
  name: 'announce',
  aliases: ['announcement'],
  description: 'Send one controlled group announcement',

  async execute({ client, message, args }) {
    const now = Date.now();
    const last = cooldowns.get(message.from) || 0;

    if (now - last < COOLDOWN) {
      const seconds = Math.ceil((COOLDOWN - (now - last)) / 1000);

      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS ANNOUNCEMENT\n\n` +
        `⏳ Cooldown active.\n` +
        `Try again in ${seconds}s.`
      );
    }

    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 Usage:\n\n` +
        `.announce Your message here`
      );
    }

    cooldowns.set(message.from, now);

    const announcement = args.join(' ');

    await client.sendText(
      message.from,
      `📢 𓊈⸸𓊉 NØXIS ANNOUNCEMENT\n\n` +
      `${announcement}\n\n` +
      `— NØXIS VENOM`
    );
  }
};
