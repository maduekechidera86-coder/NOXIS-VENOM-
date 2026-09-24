const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'database', 'db.json');

function load() {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function save(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function getReaction() {
  return load().global.reaction;
}

function setReaction(reaction) {
  const data = load();
  data.global.reaction = reaction;
  save(data);
}

function isReactionEnabled() {
  return load().global.reactionEnabled;
}

function setReactionEnabled(enabled) {
  const data = load();
  data.global.reactionEnabled = enabled;
  save(data);
}

module.exports = {
  getReaction,
  setReaction,
  isReactionEnabled,
  setReactionEnabled
};
