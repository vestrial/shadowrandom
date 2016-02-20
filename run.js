

console.log("Die Runner gehen zu einem Treffen in " + location() + " für ihren nächsten Job." +
" Sie werden von " + employer() + " für ein/e/n " + jobType() + " gegen " + macGuffin() +
" angeheuert. Der Run wird kompliziert, als " + twist() + "!");

function location() {
  locations = {
    1: "Bar, Club oder Restaurant",
    2: "Lagerhaus, Dock, Fabrik oder anderer wenig frequentierter Ort",
    3: "Barrens oder irgendein anderes urbanes Drekloch",
    4: "Fahrendes Fahrzeug",
    5: "Matrixhost",
    6: "Astralraum"
  }
  return locations[rollD6()];
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
  return Math.floor((Math.random() * 6) + 1);
}
