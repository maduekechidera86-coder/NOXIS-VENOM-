module.exports = {
  name: 'broadcastpreview',
  aliases: ['bcpreview'],
  description: 'Preview a broadcast message',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 BROADCAST PREVIEW\n\n` +
        `Usage:\n` +
        `.broadcastpreview Your message or link`
      );
    }

    const text =
      `📢 𓊈⸸𓊉 NØXIS ANNOUNCEMENT\n\n` +
      `${args.join(' ')}\n\n` +
      `— NØXIS VENOM`;

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 BROADCAST PREVIEW\n\n` +
      `╭─[ MESSAGE ]─╮\n` +
      `${text}\n` +
      `╰─────────────╯\n\n` +
      `⚡ Preview only — nothing was sent.`
    );
  }
};
