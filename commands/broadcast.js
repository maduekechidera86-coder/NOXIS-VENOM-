const approvedGroups = require('../config/broadcastGroups');

const COOLDOWN = 60000;
let lastBroadcast = 0;

module.exports = {
  name: 'broadcast',
  aliases: ['bc'],
  description: 'Send one controlled announcement to approved groups',

  async execute({ client, message, args }) {
    if (!args.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS BROADCAST\n\n` +
        `Usage:\n` +
        `.broadcast Your message or link`
      );
    }

    if (approvedGroups.length === 0) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 BROADCAST\n\n` +
        `⚠️ No approved groups configured.\n` +
        `Add up to 4 group IDs to config/broadcastGroups.js`
      );
    }

    if (approvedGroups.length > 4) {
      return client.sendText(
        message.from,
        `⚠️ Broadcast limit exceeded.\n` +
        `Maximum: 4 approved groups.`
      );
    }

    const now = Date.now();

    if (now - lastBroadcast < COOLDOWN) {
      const seconds = Math.ceil(
        (COOLDOWN - (now - lastBroadcast)) / 1000
      );

      return client.sendText(
        message.from,
        `⏳ Broadcast cooldown active.\n` +
        `Try again in ${seconds}s.`
      );
    }

    lastBroadcast = now;

    const text =
      `📢 𓊈⸸𓊉 NØXIS ANNOUNCEMENT\n\n` +
      `${args.join(' ')}\n\n` +
      `— NØXIS VENOM`;

    let sent = 0;

    for (const groupId of approvedGroups) {
      try {
        await client.sendText(groupId, text);
        sent++;
      } catch (error) {
        console.error(`Broadcast failed: ${groupId}`);
      }
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 BROADCAST COMPLETE\n\n` +
      `📡 Groups reached: ${sent}/${approvedGroups.length}\n` +
      `⚡ Status: CONTROLLED`
    );
  }
};
