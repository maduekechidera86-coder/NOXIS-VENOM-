module.exports = {
  name: 'ping',
  aliases: ['p'],
  description: 'Check bot response speed',

  async execute({ client, message, args }) {
    await client.sendText(message.from, '🕷️ NØXIS VENOM: PONG');
  }
};
