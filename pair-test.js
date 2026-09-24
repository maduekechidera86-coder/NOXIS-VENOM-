const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys');

const pino = require('pino');
const readline = require('readline');
const Boom = require('@hapi/boom'); // Baileys uses Boom for error structures

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('./session');

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    browser: ['NØXIS VENOM', 'Chrome', '1.0.0']
  });

  // Automatically save session changes
  sock.ev.on('creds.update', saveCreds);

  // Monitor connection states
  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'open') {
      console.log('🕷️ NØXIS VENOM is connected!');
      return;
    }

    if (connection === 'close') {
      const error = lastDisconnect?.error;
      // Use Boom to extract the status code properly
      const code = error?.output?.statusCode || Boom.boomify(error)?.output?.statusCode;

      console.log('\n⚠️ Connection closed');
      console.log('Status Code:', code || 'unknown');
      console.log('Reason:', error?.message || 'unknown');

      // Auto-reconnect rules based on Baileys standard protocols
      if (code === DisconnectReason.loggedOut) {
        console.log('❌ WhatsApp logged out. Delete the session folder and pair again.');
      } else if (code === DisconnectReason.restartRequired) {
        console.log('🔄 Restart required, restarting...');
        start();
      } else if (code === DisconnectReason.connectionTimedOut) {
        console.log('⏳ Connection timed out, reconnecting...');
        start();
      } else {
        console.log('🔄 Attempting reconnection...');
        start();
      }
    }

    if (connection === 'connecting') {
      console.log('🔄 Connecting to WhatsApp...');
    }
  });

  // Pairing code request (Triggered cleanly if there are no registered credentials)
  if (!sock.authState.creds.registered) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Wrapped in a quick timeout to give the socket time to build its internal state
    setTimeout(() => {
      rl.question('📱 Enter WhatsApp number with country code (e.g., 23480...): ', async (phone) => {
        rl.close();

        const number = phone.replace(/\D/g, '');

        if (!number) {
          console.log('❌ Invalid phone number format.');
          return;
        }

        try {
          // Request pairing token from WhatsApp servers
          const code = await sock.requestPairingCode(number);

          console.log('\n🔐 YOUR WHATSAPP PAIRING CODE:');
          console.log(`👉 \x1b[36m${code}\x1b[0m 👈`); // Highlights code in blue text inside terminal
          console.log('\nWhatsApp → Linked devices → Link a device → Link with phone number instead.');
          console.log('⏳ Waiting for WhatsApp to complete the pairing...');
        } catch (error) {
          console.error('\n❌ Pairing error:', error);
        }
      });
    }, 2000); 
  }
}

start().catch((error) => {
  console.error('❌ Startup error:', error);
});

