const fs = require('fs');
const path = require('path');

const file = path.join(
  __dirname,
  '..',
  'config',
  'broadcastGroups.js'
);

module.exports = {
  name: 'addgroup',
  aliases: ['addg'],
  description: 'Add the current group to the broadcast list',

  async execute({ client, message }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    delete require.cache[require.resolve('../config/broadcastGroups')];

    const groups = require('../config/broadcastGroups');

    if (groups.includes(message.from)) {
      return client.sendText(
        message.from,
        '𓊈⸸⸸𓊉 This group is already approved.'
      );
    }

    if (groups.length >= 4) {
      return client.sendText(
        message.from,
        '⚠️ Broadcast list is full.\nMaximum: 4 groups.'
      );
    }

    groups.push(message.from);

    const content =
      `module.exports = ${JSON.stringify(groups, null, 2)};\n`;

    fs.writeFileSync(file, content);

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 GROUP APPROVED\n\n` +
      `📡 Broadcast slot: ${groups.length}/4\n` +
      `⚡ Status: ACTIVE`
    );
  }
};
