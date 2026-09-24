const lockCommand = require('./gclock');

module.exports = {
  name: 'gcunlock',
  aliases: ['gunlock', 'unlock'],
  description: 'Unlock the group (Admins Only)',

  async execute({ client, message }) {
    // 1. Ensure it is a group
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    try {
      // 2. Fetch group metadata and administrators
      const groupMetadata = await client.getGroupMetadata(message.from);
      const participants = groupMetadata.participants || [];
      
      // Find admins (handling different framework properties like isAdmin or superadmin)
      const groupAdmins = participants
        .filter(p => p.isAdmin || p.isSuperAdmin || p.admin === 'admin' || p.admin === 'superadmin')
        .map(p => p.id || p.jid);

      // Define the bot owner's specific ID as an absolute backup bypass
      const botOwner = '1234567890@s.whatsapp.net'; 
      const sender = message.sender || message.author;

      // 3. Verify if the sender is allowed to use this command
      const isSenderAdmin = groupAdmins.includes(sender) || sender === botOwner;

      if (!isSenderAdmin) {
        return client.sendText(
          message.from,
          '𓊈⸸𓊉 ACCESS DENIED: Only group administrators or the bot owner can use this command.'
        );
      }

      // 4. Execute the logic safely if authorized
      if (lockCommand.lockedGroups) {
        lockCommand.lockedGroups.delete(message.from);
      }

      await client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS GROUP LOCK\n\n` +
        `🔓 GROUP: UNLOCKED\n` +
        `🟢 STATUS: ACTIVE\n` +
        `🌑 NØXIS SHIELD: OFF`
      );

    } catch (error) {
      console.error('Permission check error:', error);
      await client.sendText(message.from, '𓊈⸸𓊉 Error verifying administrator permissions.');
    }
  }
};
