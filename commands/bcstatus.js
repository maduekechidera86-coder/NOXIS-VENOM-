const approvedGroups = require('../config/broadcastGroups');

const URL_REGEX = /https?:\/\/[^\s]+/i;
const COOLDOWN = 60000;

let lastBroadcast = 0;

module.exports = {
  name: 'bcstatus',
  aliases: ['linkstatus'],
  description: 'Broadcast a replied link to approved groups',

  async execute({ client, message }) {
    const quoted = message.quotedMsg;

    if (!quoted) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS BC STATUS\n\n` +
        `⚠️ Reply to a link first.\n\n` +
        `Send a link, then reply to it with:\n` +
        `.bcstatus`
      );
    }

    const body = quoted.body || '';
    const match = body.match(URL_REGEX);

    if (!match) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 NØXIS BC STATUS\n\n` +
        `⚠️ No valid link found in the replied message.`
      );
    }

    if (!approvedGroups.length) {
      return client.sendText(
        message.from,
        `𓊈⸸𓊉 BC STATUS\n\n` +
        `⚠️ No approved groups configured.`
      );
    }

    if (approvedGroups.length > 4) {
      return client.sendText(
        message.from,
        `⚠️ Broadcast limit exceeded.\nMaximum: 4 groups.`
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

    const link = match[0];

    const text =
      `𓊈⸸𓊉 NØXIS BROADCAST\n\n` +
      `🔗 ${link}\n\n` +
      `📡 STATUS: ACTIVE\n` +
      `🌑 NØXIS VENOM`;

    let sent = 0;

    for (const groupId of approvedGroups) {
      try {
        await client.sendText(groupId, text);
        sent++;
      } catch (error) {
        console.error(`Failed to send to ${groupId}`);
      }
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 BC STATUS COMPLETE\n\n` +
      `🔗 Link processed successfully.\n` +
      `👥 Groups reached: ${sent}/${approvedGroups.length}\n` +
      `⚡ Status: CONTROLLED`
    );
  }
};
