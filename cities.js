const missouriCities = [
  "Agency", "Albany", "Amoret", "Appleton City", "Archie",
  "Argyle", "Arnold", "Ash Grove", "Ashland", "Augusta",
  "Aurora", "Auxvasse", "Ava", "Ballwin", "Barnhart",
  "Bates City", "Beaufort", "Belgrade", "Bell City", "Belle",
  "Belton", "Benton City", "Berger", "Bernie", "Bethany",
  "Billings", "Bloomsdale", "Blue Springs", "Bois D'Arc", "Bolivar",
  "Bonne Terre", "Bonnots Mill", "Boonville", "Bourbon", "Bowling Green",
  "Branson", "Bridgeton", "Brookfield", "Brookline", "Bucklin",
  "Buckner", "Buffalo", "Burfordville", "Butler", "Cabool",
  "California", "Callao", "Camdenton", "Cameron", "Canton",
  "Cape Girardeau", "Carl Junction", "Carrollton", "Carterville", "Carthage",
  "Caruthersville", "Cassville", "Cedar Hill", "Centertown", "Centerview",
  "Centralia", "Chaffee", "Chamois", "Charleston", "Chesterfield",
  "Chilhowee", "Chillicothe", "Clark", "Clarksville", "Clarkton",
  "Clever", "Clinton", "Cole Camp", "Columbia", "Concordia",
  "Crane", "Crystal City", "Cuba", "De Kalb", "De Soto",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < missouriCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(missouriCities[i]);
}

module.exports = { batches };
