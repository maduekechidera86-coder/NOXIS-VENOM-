module.exports = {
  name: 'vvbug',
  aliases: ['vvdebug'],
  description: 'Debug view-once message structure and method paths',

  async execute({ client, message }) {
    try {
      // 1. Log structure check
      let diagnosticReport = `𓊈⸸𓊉 NØXIS DIAGNOSTIC REPORT\n\n`;
      diagnosticReport += `🔹 Message object keys: ${Object.keys(message || {}).slice(0, 8).join(', ')}\n`;
      diagnosticReport += `🔹 Client object keys: ${Object.keys(client || {}).slice(0, 8).join(', ')}\n\n`;

      // 2. Track message paths
      const quotedMessage = message.quotedMessage || (message.message && message.message.extendedTextMessage && message.message.extendedTextMessage.contextInfo);
      diagnosticReport += `🔹 Quoted msg found: ${!!quotedMessage}\n`;

      if (quotedMessage) {
        const quotedContent = quotedMessage.quotedMessage || quotedMessage;
        const keys = Object.keys(quotedContent || {});
        diagnosticReport += `🔹 Quoted content keys: ${keys.slice(0, 5).join(', ')}\n`;
        
        const isViewOnce = quotedContent.viewOnceMessage || quotedContent.viewOnceMessageV2 || quotedContent.viewOnceMessageV2Extension;
        diagnosticReport += `🔹 ViewOnce flag detected: ${!!isViewOnce}\n`;
      }

      // 3. Track available download methods
      const commonMethods = ['downloadMediaMessage', 'downloadAndSaveMediaMessage', 'downloadMedia', 'downloadContentFromMessage'];
      const availableMethods = commonMethods.filter(m => typeof client[m] === 'function');
      diagnosticReport += `\n🟢 Available client download functions: ${availableMethods.join(', ') || 'NONEFOUND'}`;

      await client.sendText(message.from, diagnosticReport);

    } catch (e) {
      console.error(e);
      // Absolute fallback if even basic properties cause a crash
      try {
        await client.sendText(message.from, `𓊈⸸𓊉 Critical Crash: ${e.message}`);
      } catch (fatalError) {
        console.log('Fatal tracking fail:', fatalError);
      }
    }
  }
};
