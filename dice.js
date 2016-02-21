
module.exports.rollD6 = rollD6;
module.exports.rollDie = rollDie;

function rollD6() {
  return rollDie(6);
}

function rollDie(sides) {
  return Math.floor((Math.random() * sides) + 1);
}
