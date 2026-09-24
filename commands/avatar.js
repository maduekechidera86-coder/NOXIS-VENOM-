module.exports = {
  name: 'avatar',
  aliases: ['pp', 'profilepic'],
  description: 'Show the sender profile picture info',

  async execute({ client, message }) {
    try {
      const profile = await client.getProfilePicFromServer(message.sender.id);

      await client.sendImage(
        message.from,
        profile,
        'avatar.jpg',
        `𓊈⸸𓊉 NØXIS AVATAR\n\n` +
        `👤 USER: ${message.sender.pushname || 'Unknown'}\n` +
        `🖤 PROFILE: ACTIVE`
      );
    } catch (error) {
      await client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS AVATAR\n\n` +
        `⚠️ No profile picture available.`
      );
    }
  }
};
