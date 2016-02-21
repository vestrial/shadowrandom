var Mustache = require("mustache");
var tableCollection = require("./tables").tableCollection;
var dice = require("./dice");

module.exports = {
  parse: function(pattern) {
    var templateMap = createMustacheTemplates(tableCollection)
    while(pattern.indexOf('{{') >= 0) {
      pattern = Mustache.render(pattern, templateMap);
    }
    return pattern;
  }
}

function createMustacheTemplates(tableCollection) {
  var templateMap = [];
  for(i = 0; i < tableCollection.length; i++) {
     var table = tableCollection[i];
     addMustacheTemplate(templateMap, table);
   }
   return templateMap;
}

function addMustacheTemplate(templateMap, table) {
  templateMap[table.name] = function() {
    return pickFrom(table);
  }
}

function pickFrom(randomContent) {
  var choice;
  if (randomContent.rules) {
    choice = randomContent.rules();
  } else {
    var numerOfOptions = Object.keys(randomContent.table).length;
    choice = dice.rollDie(numerOfOptions)
  }
  return randomContent.table[choice];
}
