var Mustache = require("mustache");
var tableCollection = collectTables();

var runPattern = "Die Runner gehen zu einem Treffen in {{meetLocation}} für ihren nächsten Job." +
" Sie werden von {{employer}} für ein/e/n {{jobType}} gegen {{macGuffin}} angeheuert." +
" Der Run wird kompliziert, als {{twist}}!"

console.log(parse(runPattern));

function collectTables() {
  var tableCollection = [];
  tableCollection.push(meetLocation());
  tableCollection.push(nightlife());
  tableCollection.push(employer());
  tableCollection.push(jobType());
  tableCollection.push(macGuffin());
  tableCollection.push(twist());
  return tableCollection;
}

function parse(pattern) {
  var templateMap = {};
  for(i = 0; i < tableCollection.length; i++) {
    var table = tableCollection[i];
    addMustacheTemplate(templateMap, table);
  }
  while(pattern.indexOf('{{') >= 0) {
    pattern = Mustache.render(pattern, templateMap);
  }
  return pattern;
}

function addMustacheTemplate(templateMap, table) {
  templateMap[table.name] = function() {
    return pickFrom(table);
  }
}

function pickFrom(randomContent) {
  var numerOfOptions = Object.keys(randomContent.table).length;
  var choice = rollDie(numerOfOptions)
  return randomContent.table[choice];
}

function meetLocation() {
  return {
    name: "meetLocation",
    table: {
      1: "{{nightlife}}",
      2: "Lagerhaus, Dock, Fabrik oder anderer wenig frequentierter Ort",
      3: "Barrens oder irgendein anderes urbanes Dreksloch",
      4: "Fahrendes Fahrzeug",
      5: "Matrixhost",
      6: "Astralraum"
    }
  }
}

function nightlife() {
  return {
    name: "nightlife",
    table: {
      1: "einer Bar",
      2: "einem Club",
      3: "einem Restaurant"
    }
  }
}

function employer() {
  return {
    name: "employer",
    table:  {
      1: "employer"
    }
  }
}

function jobType() {
  return {
    name: "jobType",
    table:  {
      1: "jobType"
    }
  }
}

function macGuffin() {
  return {
    name: "macGuffin",
    table:  {
      1: "macGuffin"
    }
  }
}

function twist() {
  return {
    name: "twist",
    table:  {
      1: "twist"
    }
  }
}

function rollD6() {
  return rollDie(6);
}

function rollDie(sides) {
  return Math.floor((Math.random() * sides) + 1);
}
