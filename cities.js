const missouriCities = [
  "Dearborn", "Defiance", "Delta", "Dexter", "Diamond",
  "Dixon", "Doniphan", "Drexel", "Earth City", "Easton",
  "Edgar Springs", "Edina", "Eldon", "Elsberry", "Eminence",
  "Eolia", "Eugene", "Eureka", "Ewing", "Excelsior Springs",
  "Fair Grove", "Fairfax", "Falcon", "Farmington", "Faucett",
  "Fayette", "Fenton", "Festus", "Flemington", "Florissant",
  "Fordland", "Foristell", "Fort Leonard Wood", "Fredericktown", "Freeman",
  "Fulton", "Gainesville", "Galena", "Gallatin", "Garden City",
  "Gipsy", "Glencoe", "Glenwood", "Gower", "Grain Valley",
  "Granby", "Grandview", "Gravois Mills", "Greenwood", "Grover",
  "Grubville", "Half Way", "Hallsville", "Hamilton", "Hannibal",
  "Harris", "Harrisburg", "Harrisonville", "Hartsburg", "Hartville",
  "Hawk Point", "Hayti", "Hazelwood", "Helena", "Henley",
  "Herculaneum", "Hermann", "Hermitage", "Higbee", "Higginsville",
  "High Hill", "High Ridge", "Highlandville", "Hillsboro", "Holcomb",
  "Holden", "Holland", "Hollister", "Holt", "Holts Summit",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < missouriCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(missouriCities[i]);
}

module.exports = { batches };
