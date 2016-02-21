var dice = require("./dice");

module.exports = {
  tableCollection: [
    {
      "name": "meetLocation",
      "table": {
        "1": "{{nightlife}}",
        "2": "{{low-frequented}}",
        "3": "{{desolate}}",
        "4": "in ein fahrendes Fahrzeug",
        "5": "in einen Matrixhost",
        "6": "im Astralraum"
      }
    },
    {
      "name": "nightlife",
      "table": {
        "1": "in eine Bar",
        "2": "in einen Club",
        "3": "in ein Restaurant"
      }
    },
    {
      "name": "low-frequented",
      "table": {
        "1": "in ein Lagerhaus",
        "2": "an den Docks",
        "3": "in einer Fabrik",
        "4": "an einem wenig frequentierten Ort"
      }
    },
    {
      "name": "desolate",
      "table": {
        "1": "in die Barrens",
        "2": "in irgendein urbanes Dreksloch",
      }
    },
    {
      "name": "employer",
      "rules": function() {
        return dice.rollD6() + dice.rollD6();
      },
      "table":  {
        "2": "einer Geheimgesellschaft (z.B. Schwarze Loge, Human Nation)",
        "3": "einer politischen Gruppierung oder Aktivisten (z.B. Humanis Policlub, Mothers of Metahumans)",
        "4": "einem Regierungsmitarbeiter oder einer Regierungsbehörde",
        "5": "einem kleinen Konzern (A-Konzern oder kleiner)",
        "6": "einem kleinen Konzern (A-Konzern oder kleiner)",
        "7": "einem Megakonzern (AA-Konzern oder größer)",
        "8": "einem Megakonzern (AA-Konzern oder größer)",
        "9": "einem Verbrechersyndikat (z.B. Yakuza, Mafia)",
        "10": "einer magischen Gruppe (z.B. Illuminates of the New Dawn)",
        "11": "einer Privatperson",
        "12": "{{entity}}"
      }
    },
    {
      "name": "entity",
      "table":  {
        "1": "einem freien Geist",
        "2": "einem Drachen (in Verkleidung)",
        "3": "einer KI",
        "4": "einem Formwandler",
        "5": "einem mysteriösen Wesen",
        "6": "einem exotischen Wesen",
      }
    },
    {
      "name": "jobType",
      "table":  {
        "1": "einen Datenklau",
        "2": "{{destroy}}",
        "3": "{{in-out}}",
        "4": "eine Ablenkung",
        "5": "einen Schutzjob",
        "6": "einen Transport"
      }
    },
    {
      "name": "in-out",
      "table":  {
        "1": "eine Extraktion",
        "2": "eine Einschleusung",
      }
    },
    {
      "name": "destroy",
      "table":  {
        "1": "ein Attentat",
        "2": "einen Abriss",
      }
    },
    {
      "name": "macGuffin",
      "table":  {
        "1": "ein wichtiger Mitarbeiter",
        "2": "ein Prototyp",
        "3": "eine revolutionäres Forschungsergebnis",
        "4": "eine genmanipulierte Lebensform",
        "5": "ein magisches Objekt",
        "6": "{{magGuffin-location}}"
      }
    },
    {
      "name": "macGuffin-location",
      "table":  {
        "1": "ein Stadtgebäude",
        "2": "ein ländlicher Schauplatz",
        "3": "ein Infrastrukturobjekt"
      }
    },
    {
      "name": "twist",
      "table":  {
        "1": "die Sicherheit ist massiver als erwartet",
        "2": "eine dritte Partei ist ebenfalls interessiert",
        "3": "das Zielist nicht das, was es zu sein scheint. Das Team wurde angelogen",
        "4": "für den Job wird ein ungewöhnlicher Ausrüstungsgegenstand benötigt",
        "5": "das Ziel wurde oder wird gerade verlegt",
        "6": "der Auftraggeber haut die Runner übers Ohr"
      }
    }
  ]
}
