const jokes = [
  'Why did the computer go to the doctor? Because it had a virus. 💻',
  'Why do programmers prefer dark mode? Because light attracts bugs. 🐛',
  'Why was the JavaScript developer sad? Because he did not know how to null his feelings. 😭',
  'What do you call a sleeping computer? A nap-top. 😴💻',
  'Why did the coder bring a ladder? Because they wanted to reach the next level. 🪜',
  'Why did the phone wear glasses? Because it lost its contacts. 📱',
  'Why was the Wi-Fi so calm? It had a good connection. 📶',
  'Why did the keyboard break up with the mouse? It needed more space. ⌨️',
  'Why did the programmer quit his job? He did not get arrays. 😭',
  'What did the router say to the computer? I feel a connection between us. 📡',
  'Why did the developer go broke? Because he used up all his cache. 💸',
  'Why was the computer cold? It left its Windows open. 🥶',
  'Why did the bug get promoted? It was working overtime. 🐛',
  'Why did the gamer bring a ladder? He wanted to reach the next level. 🎮',
  'Why did the server go to sleep? It needed to reboot. 😴',
  'Why did the programmer bring a pencil? To draw a conclusion. ✏️',
  'Why did the code cross the road? To get to the other side of the bug. 🐛',
  'Why did the laptop go to school? To improve its processing skills. 💻',
  'Why did the gamer sit in the dark? He was waiting for the perfect spawn. 🎮',
  'Why did the Wi-Fi break up with Bluetooth? There was no connection. 📶',
  'Why did the computer get arrested? It was caught in a phishing scam. 🐟',
  'Why did the developer stay up all night? He was debugging his dreams. 🌙',
  'Why did the CPU get tired? Too many processes. 🧠',
  'Why did the programmer hate nature? Too many bugs. 🌳🐛',
  'Why did the code go to therapy? It had too many issues. 💀',
  'What is a hacker’s favorite season? Cache season. 😭',
  'Why did the keyboard need therapy? It had too many issues with its space. ⌨️',
  'Why did the computer sneeze? It had a virus. 🤧💻',
  'Why did the gamer bring a map? He was tired of getting lost in the lobby. 🎮',
  'Why did the bot cross the chat? To execute the command on the other side. 🤖'
];

module.exports = {
  name: 'joke',
  aliases: ['funny'],
  description: 'Send a random joke',

  async execute({ client, message }) {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];

    await client.sendText(
      message.from,
      `😂 NØXIS JOKE\n\n𓊈⸸𓊉 ${joke}`
    );
  }
};
