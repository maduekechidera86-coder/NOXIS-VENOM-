module.exports = {
  name: 'active',
  aliases: ['act'],
  description: 'Check if NØXIS VENOM is active',

  async execute({ client, message }) {
    await client.sendText(
      message.from,
      '𓊈⸸𓊉 NØXIS VENOM\n\nSTATUS: ACTIVE\nMODE: DARK\nSYSTEM: ONLINE'
    );
  }
};
