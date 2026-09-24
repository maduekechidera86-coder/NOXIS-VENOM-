const settings = require('./settings');
const { loadCommands } = require('./commandLoader');

const commands = loadCommands();

function parseMessage(message) {
  if (typeof message !== 'string') return null;

  let text = message.trim();
  if (!text) return null;

  const prefix = settings.prefix || '.';

  if (text.startsWith(prefix)) {
    text = text.slice(prefix.length).trim();
  } else if (text.startsWith('/')) {
    text = text.slice(1).trim();
  } else if (!settings.noPrefix) {
    return null;
  }

  if (!text) return null;

  const parts = text.split(/\s+/);
  const input = parts.shift().toLowerCase();

  const command = commands.get(input);

  if (!command) return null;

  return {
    command: command.name.toLowerCase(),
    args: parts,
    raw: message
  };
}

module.exports = { parseMessage };
