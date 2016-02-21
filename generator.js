var randomizer = require("./randomizer");

module.exports.randomRun = randomRun

function randomRun() {
  var runPattern = "Die Runner gehen zu einem Treffen in {{meetLocation}} für ihren nächsten Job." +
  " Sie werden von {{employer}} für ein/e/n {{jobType}} gegen {{macGuffin}} angeheuert." +
  " Der Run wird kompliziert, als {{twist}}!"

  return randomizer.fill(runPattern);
}
