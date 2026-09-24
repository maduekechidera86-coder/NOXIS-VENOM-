const fs = require('fs');
const path = require('path');

const file = path.join(
  __dirname,
  '..',
  'config',
  'broadcastGroups.js'
);

module.exports = {
  name: 'removegroup',
  aliases: ['removeg'],
  description: 'Remove the current group from the broadcast list',

  async execute({ client, message }) {
    if (!message.isGroup) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This command only works inside a group.'
      );
    }

    delete require.cache[require.resolve('../config/broadcastGroups')];

    const groups = require('../config/broadcastGroups');
    const index = groups.indexOf(message.from);

    if (index === -1) {
      return client.sendText(
        message.from,
        '𓊈⸸𓊉 This group is not on the broadcast list.'
      );
    }

    groups.splice(index, 1);

    const content =
      `module.exports = ${JSON.stringify(groups, null, 2)};\n`;

    fs.writeFileSync(file, content);

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 GROUP REMOVED\n\n` +
      `📡 Remaining slots: ${groups.length}/4\n` +
      `⚡ Broadcast access: UPDATED`
    );
  }
};
