const fs = require('fs');
const path = require('path');

const VIDEO_PATH = path.join(
  __dirname,
  '..',
  'media',
  'welcome1.mp4'
);

function cleanNumber(id = '') {
  return id.split('@')[0].replace(/\D/g, '');
}

async function sendWelcome(client, groupId, participant) {
  const number = cleanNumber(participant?.id);

  const tag = number
    ? `@${number}`
    : '@new_member';

  const caption = `
𓊈⸸𓊉 𝑵Ø𝑿𝑰𝑺 𝑽𝑬𝑵𝑶𝑴
━━━━━━━━━━━━━━━━━━━━

          ⚡ 𝑺𝒀𝑺𝑻𝑬𝑴 𝑨𝑳𝑬𝑹𝑻

╭━━━「 🕷️ NEW MEMBER 」━━━╮
┃
┃  👤 ${tag}
┃
┃  Status: ACCEPTED
┃  Access: GRANTED
┃  Sector: NØXIS
┃
╰━━━━━━━━━━━━━━━━━━━━━━╯

🌑 Welcome to the shadow.

Before you move deeper:
• Respect everyone
• Follow the group rules
• No unnecessary drama
• Stay active and enjoy the community

𓊈⸸𓊉 𝑻𝑯𝑬 𝑺𝑯𝑨𝑫𝑶𝑾 𝑹𝑬𝑴𝑬𝑴𝑩𝑬𝑹𝑺

━━━━━━━━━━━━━━━━━━━━
🕷️ NØXIS VENOM
⚡ SYSTEM ONLINE
━━━━━━━━━━━━━━━━━━━━
`;

  try {
    if (fs.existsSync(VIDEO_PATH)) {
      await client.sendFile(
        groupId,
        VIDEO_PATH,
        'welcome1.mp4',
        caption
      );
    } else {
      await client.sendText(groupId, caption);
    }
  } catch (error) {
    console.error('❌ Welcome event:', error.message);

    try {
      await client.sendText(groupId, caption);
    } catch {}
  }
}

module.exports = {
  sendWelcome
};
