module.exports = {
  name: 'gcclean',
  description: 'Demote or remove unauthorized users (Requires Bot Admin privileges)',

  async execute({ client, message }) {
    if (!message.isGroup) return;

    const botOwner = '1234567890@s.whatsapp.net'; 
    const sender = message.sender || message.author;

    if (sender !== botOwner) {
      return client.sendText(message.from, '𓊈⸸𓊉 Only the bot owner can trigger emergency cleanup.');
    }

    // Check if the bot itself is an admin to perform actions
    const groupMetadata = await client.getGroupMetadata(message.from);
    const myId = client.user.id || client.user.jid;
    const botParticipant = groupMetadata.participants.find(p => (p.id || p.jid) === myId);
    const isBotAdmin = botParticipant?.isAdmin || botParticipant?.admin;

    if (!isBotAdmin) {
      return client.sendText(message.from, '𓊈⸸𓊉 I cannot clean up the group because I am not an administrator.');
    }

    // Example target list of users to remove/demote (can be populated via arguments or hardcoded)
    const targets = ['unauthorized_user_1@s.whatsapp.net', 'unauthorized_user_2@s.whatsapp.net'];

    try {
      // Re-lock group settings to admins only via the API
      if (typeof client.groupSettingUpdate === 'function') {
        await client.groupSettingUpdate(message.from, 'announcement', 'true'); // Only admins can send messages
        await client.groupSettingUpdate(message.from, 'locked', 'true');       // Only admins can edit settings
      }

      // Bulk demote targets
      for (const target of targets) {
        if (typeof client.groupParticipantsUpdate === 'function') {
          await client.groupParticipantsUpdate(message.from, [target], 'demote');
        }
      }

      await client.sendText(message.from, '𓊈⸸𓊉 Emergency cleanup executed. Settings locked to administrators.');
    } catch (e) {
      console.error(e);
    }
  }
};
