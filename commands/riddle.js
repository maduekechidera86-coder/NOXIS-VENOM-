const riddles = [
  {
    question: 'What has keys but cannot open locks?',
    answer: 'A keyboard.'
  },
  {
    question: 'What gets wetter the more it dries?',
    answer: 'A towel.'
  },
  {
    question: 'What has a face and two hands but no arms or legs?',
    answer: 'A clock.'
  },
  {
    question: 'What can travel around the world while staying in one corner?',
    answer: 'A stamp.'
  },
  {
    question: 'What has many teeth but cannot bite?',
    answer: 'A comb.'
  }
];

module.exports = {
  name: 'riddle',
  aliases: ['puzzle'],
  description: 'Send a random riddle',

  async execute({ client, message }) {
    const riddle = riddles[Math.floor(Math.random() * riddles.length)];

    await client.sendText(
      message.from,
      `🧩 NØXIS RIDDLE\n\n❓ ${riddle.question}\n\n💡 Answer: ${riddle.answer}`
    );
  }
};
