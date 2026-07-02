const missouriCities = [
  "House Springs", "Houstonia", "Hughesville", "Humansville", "Hume",
  "Iberia", "Imperial", "Independence", "Ironton", "Jackson",
  "Jamesport", "Jamestown", "Jasper", "Jefferson City", "Joplin",
  "Kahoka", "Kaiser", "Kansas City", "Kearney", "Kelso",
  "Kennett", "Keytesville", "Kimberling City", "Kingsville", "Kirksville",
  "Knob Noster", "Koeltztown", "La Plata", "Labadie", "Lake Ozark",
  "Lake Saint Louis", "Lamar", "Lawson", "Lebanon", "Lee'S Summit",
  "Leslie", "Lewistown", "Lexington", "Liberty", "Licking",
  "Linn", "Linn Creek", "Lockwood", "Lohman", "Lone Jack",
  "Lonedell", "Loose Creek", "Louisiana", "Macon", "Maitland",
  "Mansfield", "Marble Hill", "Marceline", "Marionville", "Marshall",
  "Marshfield", "Marthasville", "Martinsburg", "Maryland Heights", "Maryville",
  "Maysville", "Meadville", "Memphis", "Meta", "Mexico",
  "Miami", "Miller", "Milo", "Moberly", "Mokane",
  "Monett", "Montgomery City", "Montrose", "Mooresville", "Moscow Mills",
  "Mound City", "Mount Vernon", "Mountain Grove", "Mountain View", "Neosho",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < missouriCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(missouriCities[i]);
}

module.exports = { batches };
