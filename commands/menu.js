const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'menu',
  aliases: ['help', 'commands'],

  async execute({ client, message, args }) {
    const mediaPath = path.join(
      __dirname,
      '..',
      'media',
      'menu.mp4'
    );

    const menu = `
𓊈⸸𓊉  𝑵Ø𝑿𝑰𝑺 𝑽𝑬𝑵𝑶𝑴
━━━━━━━━━━━━━━━━━━━━

        🕷️ 𝑺𝒀𝑺𝑻𝑬𝑴 𝑴𝑬𝑵𝑼

╭━━━「 ⚡ CORE 」━━━╮
┃
┃  ◈ .ping
┃  ◈ .status
┃  ◈ .runtime
┃  ◈ .help
┃
╰━━━━━━━━━━━━━━━━━━╯

╭━━━「 👤 MEMBER 」━━━╮
┃
┃  ◈ .profile
┃  ◈ .rank
┃  ◈ .xp
┃
╰━━━━━━━━━━━━━━━━━━━━╯

╭━━━「 🎯 TASKS 」━━━╮
┃
┃  ◈ .task
┃  ◈ .event
┃  ◈ .leaderboard
┃
╰━━━━━━━━━━━━━━━━━━╯

╭━━━「 🛡️ ADMIN 」━━━╮
┃
┃  ◈ .settings
┃  ◈ .mode
┃  ◈ .antilink
┃
╰━━━━━━━━━━━━━━━━━━╯

𓊈⸸𓊉 𝑵Ø𝑿𝑰𝑺
「 𝑬𝑵𝑻𝑬𝑹 𝑻𝑯𝑬 𝑺𝑯𝑨𝑫𝑶𝑾 」

🕷️ Prefix: .
⚡ Mode: DARK
━━━━━━━━━━━━━━━━━━━━
`;

    try {
      if (fs.existsSync(mediaPath)) {
        await client.sendFile(
          message.from,
          mediaPath,
          'menu.mp4',
          menu
        );
      } else {
        await client.sendText(
          message.from,
          menu
        );
      }
    } catch (error) {
      console.error('Menu error:', error.message);

      try {
        await client.sendText(
          message.from,
          menu
        );
      } catch {}
    }
  }
};
