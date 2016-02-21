var dice = require("./dice");

module.exports = {
  tableCollection: [
    {
      "name": "meetLocation",
      "table": {
        "1": "{{nightlife}}",
        "2": "Lagerhaus, Dock, Fabrik oder anderer wenig frequentierter Ort",
        "3": "Barrens oder irgendein anderes urbanes Dreksloch",
        "4": "Fahrendes Fahrzeug",
        "5": "Matrixhost",
        "6": "Astralraum"
      }
    },
    {
      "name": "nightlife",
      "table": {
        "1": "einer Bar",
        "2": "einem Club",
        "3": "einem Restaurant"
      }
    },
    {
      "name": "employer",
      "rules": function() {
        return dice.rollD6() + dice.rollD6();
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
    },
    {
      "name": "jobType",
      "table":  {
        "1": "Datenklau",
        "2": "Attentat oder Zerstörung",
        "3": "Extraktion oder Einschleusung",
        "4": "Ablenkung",
        "5": "Personen- oder Objektschutz",
        "6": "Transport"
      }
    },
    {
      "name": "macGuffin",
      "table":  {
        "1": "Wichtiger Mitarbeiter",
        "2": "Ein Prototyp",
        "3": "Revolutionäre Forschungsergebnisse",
        "4": "Genmanipulierte Lebensform",
        "5": "Magisches Objekt",
        "6": "Stadtgebäude, ländlicher Schauplatz oder Infrastrukturobjekt"
      }
    },
    {
      "name": "twist",
      "table":  {
        "1": "die Sicherheit ist massiver als erwartet",
        "2": "eine dritte Partei ist ebenfalls interessiert",
        "3": "das Zielobjekt/die Zielperson ist nicht das, was es/sie zu sein scheint. Das Team wurde angelogen",
        "4": "für den Job wird ein ungewöhnlicher Ausrüstungsgegenstand benötigt",
        "5": "das Zielobjekt/-person wurde oder wird gerade verlegt",
        "6": "der Auftraggeber haut die Runner übers Ohr"
      }
    }
  ]
}
