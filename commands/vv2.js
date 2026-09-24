module.exports = {
  name: 'vv2',
  aliases: ['viewonce2', 'dmvv'],
  description: 'Retrieve view-once media and send it to your DM',

  async execute({ client, message }) {
    const quotedMessage = message.quotedMessage || (message.message && message.message.extendedTextMessage && message.message.extendedTextMessage.contextInfo);
    
    if (!quotedMessage) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 Please reply to a View Once image or video.'
      );
    }

    const quotedContent = quotedMessage.quotedMessage || quotedMessage;
    const isViewOnce = quotedContent.viewOnceMessage || 
                       quotedContent.viewOnceMessageV2 || 
                       quotedContent.viewOnceMessageV2Extension;

    if (!isViewOnce) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 That is not a View Once message.'
      );
    }

    try {
      // Get the sender's personal ID (DM destination)
      const targetDM = message.sender || message.author; 
      
      if (!targetDM) {
        return client.sendText(message.from, '𓊈⸸𓊉 Could not determine your DM address.');
      }

      const mediaBuffer = await client.downloadMediaMessage(quotedMessage);
      const mediaType = quotedContent.viewOnceMessage?.message?.imageMessage || 
                        quotedContent.viewOnceMessageV2?.message?.imageMessage 
                        ? 'image' : 'video';

      // Send the media directly to the user's private DM (targetDM)
      await client.sendMedia(
        targetDM, 
        mediaBuffer, 
        mediaType, 
        `𓊈⸸𓊉 NØXIS VIEW ONCE BYPASS (DM)\n\n` +
        `🔓 MEDIA: EXTRACTED\n` +
        `🟢 STATUS: SUCCESS\n` +
        `🌑 NØXIS SHIELD: ACTIVE`
      );

      // Confirm to the group chat that it was sent to their DM
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Media extracted! Check your DM.'
      );

    } catch (error) {
      console.error(error);
      await client.sendText(
        message.from,
        '𓊈⸸𓊉 Failed to extract media. It might have expired or failed to download.'
      );
    }
  }
};
