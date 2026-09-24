const venom = require('venom-bot');
const { loadCommands } = require('./config/commandLoader');
const { sanitizeMessage } = require('./helpers/antiCrash');
const { parseMessage } = require('./config/parser');

const commands = loadCommands();

console.log('🕷️ Starting NØXIS VENOM...');

venom
  .create({
    session: 'noxis-venom',
    folderNameToken: 'session',
    headless: true,
    logQR: true,
    disableWelcome: true
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error('❌ Venom startup error:', error);
  });

function start(client) {
  console.log('🕷️ NØXIS VENOM is online.');

  client.onMessage(async (message) => {
    try {
      const cleanText = sanitizeMessage(message.body || '');
      const parsed = parseMessage(cleanText);

      if (!parsed) return;

      const command = commands.get(parsed.command);

      if (!command) return;

      await command.execute({
        client,
        message,
        args: parsed.args
      });
    } catch (error) {
      console.error('❌ Command error:', error);
    }
  });
}
