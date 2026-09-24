const express = require('express');
const path = require('path');
const {
  default: makeWASocket,
  useMultiFileAuthState
} = require('@whiskeysockets/baileys');

const app = express();

const PORT = process.env.PORT || 8000;
const SESSION_DIR = path.join(__dirname, 'session');

app.use(express.json());
app.use(express.static(__dirname));

let sock = null;
let pairingBusy = false;

async function startWhatsApp() {
  if (sock) return sock;

  const { state, saveCreds } =
    await useMultiFileAuthState(SESSION_DIR);

  sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection === 'open') {
      console.log('🟢 NØXIS VENOM — WhatsApp connected');
    }

    if (connection === 'close') {
      console.log('🔴 NØXIS VENOM — WhatsApp connection closed');

      sock = null;

      if (lastDisconnect?.error) {
        console.log(
          'Reason:',
          lastDisconnect.error.message || 'Unknown'
        );
      }
    }
  });

  return sock;
}

app.get('/api/status', (req, res) => {
  res.json({
    bot: 'NØXIS VENOM',
    whatsapp: sock ? 'connecting' : 'offline'
  });
});

app.post('/api/pair', async (req, res) => {
  try {
    if (pairingBusy) {
      return res.status(429).json({
        success: false,
        error: 'A pairing request is already running.'
      });
    }

    const phone = String(req.body.phone || '')
      .replace(/\D/g, '');

    if (!phone || phone.length < 8) {
      return res.status(400).json({
        success: false,
        error: 'Enter a valid phone number.'
      });
    }

    pairingBusy = true;

    const client = await startWhatsApp();

    const code = await client.requestPairingCode(phone);

    console.log('🔐 NØXIS VENOM pairing code generated');

    res.json({
      success: true,
      code
    });

  } catch (error) {
    console.error('❌ Pairing error:', error.message);

    res.status(500).json({
      success: false,
      error: error.message
    });

  } finally {
    pairingBusy = false;
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('𓊈⸸𓊉 NØXIS VENOM');
  console.log(`🕷️ Pairing Web running on port ${PORT}`);
  console.log('⚡ Railway-ready backend');
  console.log('');
});
