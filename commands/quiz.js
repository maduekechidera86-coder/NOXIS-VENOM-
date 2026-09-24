const quizzes = [
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['A. Venus', 'B. Mars', 'C. Jupiter', 'D. Saturn'],
    answer: 'B. Mars'
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['A. Atlantic', 'B. Indian', 'C. Pacific', 'D. Arctic'],
    answer: 'C. Pacific'
  },
  {
    question: 'How many sides does a hexagon have?',
    options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
    answer: 'B. 6'
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['A. Ag', 'B. Fe', 'C. Au', 'D. Go'],
    answer: 'C. Au'
  },
  {
    question: 'Which animal is known as the fastest land animal?',
    options: ['A. Lion', 'B. Cheetah', 'C. Horse', 'D. Leopard'],
    answer: 'B. Cheetah'
  },
  {
    question: 'How many continents are there?',
    options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
    answer: 'C. 7'
  },
  {
    question: 'Which gas do humans need to breathe?',
    options: ['A. Carbon dioxide', 'B. Oxygen', 'C. Hydrogen', 'D. Helium'],
    answer: 'B. Oxygen'
  },
  {
    question: 'What is 12 × 8?',
    options: ['A. 86', 'B. 96', 'C. 108', 'D. 112'],
    answer: 'B. 96'
  },
  {
    question: 'Which language is primarily used to structure web pages?',
    options: ['A. HTML', 'B. Python', 'C. SQL', 'D. Bash'],
    answer: 'A. HTML'
  },
  {
    question: 'What does CPU stand for?',
    options: [
      'A. Central Processing Unit',
      'B. Computer Power Unit',
      'C. Central Program Utility',
      'D. Core Processing User'
    ],
    answer: 'A. Central Processing Unit'
  },
  {
    question: 'Which ocean is between Africa and Australia?',
    options: ['A. Atlantic', 'B. Pacific', 'C. Indian', 'D. Arctic'],
    answer: 'C. Indian'
  },
  {
    question: 'What is the opposite of "ancient"?',
    options: ['A. Old', 'B. Historic', 'C. Modern', 'D. Past'],
    answer: 'C. Modern'
  },
  {
    question: 'Which number is a prime number?',
    options: ['A. 9', 'B. 15', 'C. 21', 'D. 17'],
    answer: 'D. 17'
  },
  {
    question: 'Which file extension is commonly used for JavaScript files?',
    options: ['A. .py', 'B. .js', 'C. .html', 'D. .css'],
    answer: 'B. .js'
  },
  {
    question: 'What does RAM stand for?',
    options: [
      'A. Random Access Memory',
      'B. Rapid Application Module',
      'C. Read Access Machine',
      'D. Runtime Application Memory'
    ],
    answer: 'A. Random Access Memory'
  }
];

module.exports = {
  name: 'quiz',
  aliases: ['question'],
  description: 'Send a random quiz question',

  async execute({ client, message }) {
    const quiz = quizzes[Math.floor(Math.random() * quizzes.length)];

    const text =
      `🧠 NØXIS QUIZ\n\n` +
      `❓ ${quiz.question}\n\n` +
      `${quiz.options.join('\n')}\n\n` +
      `✅ Answer: ${quiz.answer}`;

    await client.sendText(message.from, text);
  }
};
