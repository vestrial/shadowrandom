var Mustache = require("mustache");

var runPattern = "Die Runner gehen zu einem Treffen in {{location}} für ihren nächsten Job." +
" Sie werden von {{employer}} für ein/e/n {{jobType}} gegen {{macGuffin}} angeheuert." +
" Der Run wird kompliziert, als {{twist}}!"

console.log(parse(runPattern));

function parse(pattern) {
  var tables = {
    nightlife: pickFrom(nightlife()),
    location: pickFrom(location()),
    employer: employer(),
    jobType: jobType(),
    macGuffin: macGuffin(),
    twist: twist()
  }
  while(pattern.indexOf('{{') >= 0) {
    pattern = Mustache.render(pattern, tables);
  }
  return pattern;
}

function location() {
  return locations = {
    1: "{{nightlife}}",
    2: "Lagerhaus, Dock, Fabrik oder anderer wenig frequentierter Ort",
    3: "Barrens oder irgendein anderes urbanes Dreksloch",
    4: "Fahrendes Fahrzeug",
    5: "Matrixhost",
    6: "Astralraum"
  }
}

function nightlife() {
  return locations = {
    1: "einer Bar",
    2: "einem Club",
    3: "einem Restaurant"
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
