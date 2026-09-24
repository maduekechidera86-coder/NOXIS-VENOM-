module.exports = {
  name: 'time',
  aliases: ['clock', 'now'],
  description: 'Show the current NØXIS time',

  async execute({ client, message }) {
    const now = new Date();

    const time = now.toLocaleTimeString('en-NG', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Africa/Lagos'
    });

    const date = now.toLocaleDateString('en-NG', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Africa/Lagos'
    });

    const hour = Number(
      new Intl.DateTimeFormat('en-NG', {
        hour: 'numeric',
        hour12: false,
        timeZone: 'Africa/Lagos'
      }).format(now)
    );

    let phase;

    if (hour >= 5 && hour < 12) {
      phase = '🌅 MORNING';
    } else if (hour >= 12 && hour < 17) {
      phase = '☀️ AFTERNOON';
    } else if (hour >= 17 && hour < 21) {
      phase = '🌆 EVENING';
    } else {
      phase = '🌑 NIGHT';
    }

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS TIME SYSTEM\n\n` +
      `⏰ ${time}\n` +
      `📅 ${date}\n` +
      `${phase}\n\n` +
      `🌍 LOCATION: NIGERIA\n` +
      `🕐 TIMEZONE: WAT (UTC+1)\n` +
      `⚙️ SYSTEM: SYNCHRONIZED\n\n` +
      `𓊈⸸𓊉 THE SHADOWS ARE AWAKE.`
    );
  }
};
