var Mustache = require("mustache");
var templates = require("./templates");

var runPattern = "Die Runner gehen zu einem Treffen in {{meetLocation}} für ihren nächsten Job." +
" Sie werden von {{employer}} für ein/e/n {{jobType}} gegen {{macGuffin}} angeheuert." +
" Der Run wird kompliziert, als {{twist}}!"

console.log("");
console.log(randomRun());
console.log("");
console.log(randomRun());
console.log("");

function randomRun() {
  return parse(runPattern);
}

function parse(pattern) {
  while(pattern.indexOf('{{') >= 0) {
    pattern = Mustache.render(pattern, templates.templateMap);
  }
  return pattern;
}
