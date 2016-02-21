var dice = require("./dice");

module.exports = {
  tableCollection: [
    {
      "name": "meetLocation",
      "table": {
        "1": "{{nightlife}}",
        "2": "{{desolate}}",
        "3": "die Barrens oder irgendein anderes urbanes Dreksloch",
        "4": "ein fahrendes Fahrzeug",
        "5": "einen Matrixhost",
        "6": "den Astralraum"
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
      "name": "desolate",
      "table": {
        "1": "ein Lagerhaus",
        "2": "die Docks",
        "3": "eine Fabrik",
        "4": "einem wenig frequentierten Ort"
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
        "10": "einer Magischen Gruppe (z.B. Illuminates of the New Dawn)",
        "11": "einer Privatperson",
        "12": "einem exotischen oder mysteriösen Wesen (z.B. Freier Geist, Drache, KI)"
      }
    },
    {
      "name": "jobType",
      "table":  {
        "1": "einen Datenklau",
        "2": "ein Attentat oder Zerstörung",
        "3": "eine Extraktion oder Einschleusung",
        "4": "eine Ablenkung",
        "5": "einen Personen- oder Objektschutz",
        "6": "einen Transport"
      }
    },
    {
      "name": "macGuffin",
      "table":  {
        "1": "einen wichtigen Mitarbeiter",
        "2": "einen Prototypen",
        "3": "revolutionäre Forschungsergebnisse",
        "4": "eine genmanipulierte Lebensform",
        "5": "ein magisches Objekt",
        "6": "ein Stadtgebäude, ländlicher Schauplatz oder Infrastrukturobjekt"
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
