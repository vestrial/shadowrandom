

var runPattern = "Die Runner gehen zu einem Treffen in " + pickFrom(location()) + " für ihren nächsten Job." +
" Sie werden von " + employer() + " für ein/e/n " + jobType() + " gegen " + macGuffin() +
" angeheuert. Der Run wird kompliziert, als " + twist() + "!"

console.log(parse(runPattern));

function parse(pattern) {
  return pattern;
}

function location() {
  return locations = {
    1: "Bar, Club oder Restaurant",
    2: "Lagerhaus, Dock, Fabrik oder anderer wenig frequentierter Ort",
    3: "Barrens oder irgendein anderes urbanes Dreksloch",
    4: "Fahrendes Fahrzeug",
    5: "Matrixhost",
    6: "Astralraum"
  }
}

function pickFrom(randomMap) {
  var numerOfOptions = Object.keys(randomMap).length;
  var choice = rollDie(numerOfOptions)
  return randomMap[choice];
}

function employer() {
  return "employer";
}

function jobType() {
  return "jobType";
}

function macGuffin() {
  return "macGuffin";
}

function twist() {
  return "twist";
}

function rollD6() {
  return rollDie(6);
}

function rollDie(sides) {
  return Math.floor((Math.random() * sides) + 1);
}
