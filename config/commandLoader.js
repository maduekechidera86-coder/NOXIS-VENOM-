const fs = require('fs');
const path = require('path');

function loadCommands() {
  const commands = new Map();
  const commandDir = path.join(__dirname, '..', 'commands');

  for (const file of fs.readdirSync(commandDir)) {
    if (!file.endsWith('.js')) continue;

    const command = require(path.join(commandDir, file));

    if (!command.name || typeof command.execute !== 'function') continue;

    commands.set(command.name.toLowerCase(), command);

    for (const alias of command.aliases || []) {
      commands.set(alias.toLowerCase(), command);
    }
  }

  return commands;
}

module.exports = { loadCommands };
