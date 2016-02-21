var tableCollection = collectTables();
module.exports = {
  templateMap: createMustacheTemplates(tableCollection)
}

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
    choice = rollDie(numerOfOptions)
  }
  return randomContent.table[choice];
}

function rollD6() {
  return rollDie(6);
}

function rollDie(sides) {
  return Math.floor((Math.random() * sides) + 1);
}

function meetLocation() {
  return {
    "name": "meetLocation",
    "table": {
      "1": "{{nightlife}}",
      "2": "Lagerhaus, Dock, Fabrik oder anderer wenig frequentierter Ort",
      "3": "Barrens oder irgendein anderes urbanes Dreksloch",
      "4": "Fahrendes Fahrzeug",
      "5": "Matrixhost",
      "6": "Astralraum"
    }
  }
}

function nightlife() {
  return {
    "name": "nightlife",
    "table": {
      "1": "einer Bar",
      "2": "einem Club",
      "3": "einem Restaurant"
    }
  }
}

function employer() {
  return {
    "name": "employer",
    "rules": function() {
      return rollD6() + rollD6();
    },
    "table":  {
      "2": "Geheimgesellschaft (z.B. Schwarze Loge, Human Nation)",
      "3": "Politische Gruppierung oder Aktivisten (z.B. Humanis Policlub, Mothers of Metahumans)",
      "4": "Regierungsmitarbeiter oder -behörde",
      "5": "Kleinerer Konzern (A-Konzern oder kleiner)",
      "6": "Kleinerer Konzern (A-Konzern oder kleiner)",
      "7": "Megakonzern (AA-Konzern oder größer)",
      "8": "Megakonzern (AA-Konzern oder größer)",
      "9": "Verbrechersyndikat (z.B. Yakuza, Mafia)",
      "10": "Magische Gruppe (z.B. Illuminates of the New Dawn)",
      "11": "Privatperson",
      "12": "Exotisches oder mysteriöses Wesen (z.B. Freier Geist, Drache, KI)"
    }
  }
}

function jobType() {
  return {
    "name": "jobType",
    "table":  {
      "1": "Datenklau",
      "2": "Attentat oder Zerstörung",
      "3": "Extraktion oder Einschleusung",
      "4": "Ablenkung",
      "5": "Personen- oder Objektschutz",
      "6": "Transport"
    }
  }
}

function macGuffin() {
  return {
    "name": "macGuffin",
    "table":  {
      "1": "Wichtiger Mitarbeiter",
      "2": "Ein Prototyp",
      "3": "Revolutionäre Forschungsergebnisse",
      "4": "Genmanipulierte Lebensform",
      "5": "Magisches Objekt",
      "6": "Stadtgebäude, ländlicher Schauplatz oder Infrastrukturobjekt"
    }
  }
}

function twist() {
  return {
    "name": "twist",
    "table":  {
      "1": "Die Sicherheit ist massiver als erwartet.",
      "2": "Eine dritte Partei ist ebenfalls interessiert.",
      "3": "Zielobjekt/-person ist nicht das, was es/sie zu sein scheint. (Team wurde angelogen.)",
      "4": "Für den Job wird ein ungewöhnlicher Ausrüstungsgegenstand benötigt.",
      "5": "Zielobjekt/-person wurde oder wird gerade verlegt.",
      "6": "Auftraggeber haut die Runner übers Ohr."
    }
  }
}
