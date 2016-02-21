
module.exports = {
  rollD6: function() {
    return roll(6);
  },
  rollDie: function(sides) {
    return roll(sides);
  }
}

function roll(sides) {
  return Math.floor((Math.random() * sides) + 1);
}
