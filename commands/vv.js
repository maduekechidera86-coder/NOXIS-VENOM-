module.exports = {
  name: 'vv',
  aliases: ['viewonce', 'retrieved'],
  description: 'Retrieve and resend view-once media',

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
      const mediaBuffer = await client.downloadMediaMessage(quotedMessage);
      const mediaType = quotedContent.viewOnceMessage?.message?.imageMessage || 
                        quotedContent.viewOnceMessageV2?.message?.imageMessage 
                        ? 'image' : 'video';

      await client.sendMedia(
        message.from, 
        mediaBuffer, 
        mediaType, 
        `𓊈⸸𓊉 NØXIS VIEW ONCE BYPASS\n\n` +
        `🔓 MEDIA: EXTRACTED\n` +
        `🟢 STATUS: SUCCESS\n` +
        `🌑 NØXIS SHIELD: ACTIVE`
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
