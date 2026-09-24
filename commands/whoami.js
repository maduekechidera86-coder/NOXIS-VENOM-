module.exports = {
  name: 'whoami',
  aliases: ['me', 'myid'],
  description: 'Show your WhatsApp identity',

  async execute({ client, message }) {
    const sender = message.sender || {};
    const name = sender.pushname || sender.name || 'Unknown';
    const number = message.from
      ? message.from.replace('@c.us', '')
      : 'Unknown';

    await client.sendText(
      message.from,
      `╔════════════════════╗\n` +
      `        👤 NØXIS ID\n` +
      `╚════════════════════╝\n\n` +

      `👤 NAME\n` +
      `└─ ${name}\n\n` +

      `📱 ID\n` +
      `└─ ${number}\n\n` +

      `🟢 STATUS\n` +
      `└─ VERIFIED BY NØXIS\n\n` +

      `𓊈⸸𓊉 IDENTITY SYSTEM: ACTIVE`
    );
  }
};
