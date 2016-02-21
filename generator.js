var randomizer = require("./randomizer");

module.exports.randomRun = randomRun

function randomRun() {
  var runPattern = "Die Runner gehen für ihren nächsten Job zu einem Treffen {{{meetLocation}}}.\n\n" +
  "Sie werden von {{{employer}}} für {{{jobType}}} angeheuert. Das Ziel ist {{{macGuffin}}}.\n\n" +
  "Der Run wird kompliziert, denn {{{twist}}}!"

  return randomizer.fill(runPattern);
}
