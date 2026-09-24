const quotes = [
  'The shadows remember everything. 🖤',
  'Silence speaks when words become useless.',
  'Not everyone deserves access to your world.',
  'Walk alone if the path is yours.',
  'Darkness is sometimes where you find yourself.',
  'Trust slowly. Observe everything.',
  'A calm mind is more dangerous than a loud one.',
  'Some chapters end without a goodbye.',
  'Move in silence. Let the results speak.',
  'The night knows secrets the daylight never will.',
  'Never chase what chooses to walk away.',
  'Your energy is your territory. Protect it.',
  'Stay mysterious. Not everyone needs your story.',
  'The strongest moves are often made quietly.',
  'NØXIS does not follow the darkness. NØXIS owns the night.',
  'Sometimes distance reveals what closeness hides.',
  'Keep your circle small and your vision clear.',
  'The quiet ones notice everything.',
  'You do not need to explain every silence.',
  'Let them wonder. Mystery has its own power.',
  'Some people are lessons wearing familiar faces.',
  'Peace feels different when you stop forcing things.',
  'The night gets quiet, but the mind gets loud.',
  'Protect your peace like it is your last territory.',
  'Not every goodbye needs another conversation.',
  'Your story is still being written.',
  'Stay patient. Your time does not need permission.',
  'Real strength does not need an audience.',
  'Sometimes the best response is no response.',
  'Keep moving even when nobody understands the direction.',
  'A closed door can still lead to an open road.',
  'Do not confuse silence with weakness.',
  'Some memories belong in the past.',
  'The darkest nights still end.',
  'Be rare, not available to everyone.',
  'Observe more. React less.',
  'Your future deserves more attention than your past.',
  'Not every battle deserves your energy.',
  'Let your actions introduce you.',
  'The less you reveal, the less they can misunderstand.',
  'Stay focused while the noise gets louder.',
  'A peaceful mind is worth more than temporary attention.',
  'Keep your standards higher than your emotions.',
  'Some paths are meant to be walked alone.',
  'You can outgrow places without hating them.',
  'The strongest comeback is becoming better.',
  'Do not let one chapter define the whole story.',
  'Sometimes silence is the cleanest answer.',
  'Build quietly. Let the result make the noise.',
  'NØXIS lives where the night begins. 🕷️'
];

module.exports = {
  name: 'quote',
  aliases: ['q'],
  description: 'Send a random dark quote',

  async execute({ client, message }) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    await client.sendText(
      message.from,
      `𓊈⸸𓊉 NØXIS QUOTE\n\n🖤 ${quote}`
    );
  }
};
