var randomizer = require("./randomizer");

console.log("");
console.log(randomRun());
console.log("");

function randomRun() {
  var runPattern = "Die Runner gehen zu einem Treffen in {{meetLocation}} für ihren nächsten Job." +
  " Sie werden von {{employer}} für ein/e/n {{jobType}} gegen {{macGuffin}} angeheuert." +
  " Der Run wird kompliziert, denn {{twist}}!"

  return randomizer.fill(runPattern);
}
