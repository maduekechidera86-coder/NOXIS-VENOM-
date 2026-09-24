const express = require('express');
const path = require('path');
const {
  default: makeWASocket,
  useMultiFileAuthState
} = require('@whiskeysockets/baileys');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static(__dirname));

let sock = null;
let pairingBusy = false;

async function startWhatsApp() {
  if (sock) return sock;

  const { state, saveCreds } =
    await useMultiFileAuthState(path.join(__dirname, 'session'));

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
        console.log('Reason:', lastDisconnect.error.message);
      }
    }
  });

  return sock;
}

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

    if (!phone) {
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

app.get('/api/status', (req, res) => {
  res.json({
    bot: 'NØXIS VENOM',
    whatsapp: sock ? 'connecting' : 'offline'
  });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log('');
  console.log('𓊈⸸𓊉 NØXIS VENOM');
  console.log('🕷️ Pairing Web: http://127.0.0.1:' + PORT);
  console.log('⚡ Backend ready');
  console.log('');
});
