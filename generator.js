var randomizer = require("./randomizer");

module.exports.randomRun = randomRun

function randomRun() {
  var runPattern = "Die Runner gehen für ihren nächsten Job zu einem Treffen in {{{meetLocation}}}." +
  " Sie werden von {{{employer}}} für {{{jobType}}} gegen {{{macGuffin}}} angeheuert." +
  " Der Run wird kompliziert, denn {{{twist}}}!"

  return randomizer.fill(runPattern);
}
