const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Rocket = require('../models/rocket');

Rocket.collection.drop();

Rocket
  .create([
    { // Rocket info
      name: 'Falcon 9',
      manufacturer: 'SpaceX',
      country: 'USA',
      description: 'Falcon 9 is a family of two-stage-to-orbit launch vehicles, named for its use of nine first-stage engines, designed and manufactured by SpaceX. The Falcon 9 versions are Falcon 9 v1.0 (retired), Falcon 9 v1.1 (retired), and the current Falcon 9 Full Thrust, a partially-reusable launch system. Both stages are powered by rocket engines that burn liquid oxygen (LOX) and rocket-grade kerosene (RP-1) propellants. The first stage is designed to be reusable, while the second stage is not.',
      firstFlight: '4 June 2010',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Iridium-1_Launch_%2832312419215%29.jpg',
        description: 'SpaceX’s Falcon 9 Full Thrust rocket lifts off from Vandenberg Air Force Base SLC-4E with the first ten Iridium NEXT communication satellites (January 2017).'
      },
      // Rocket stats
      height: 70,
      payload: 22800,
      stages: 2,
      costPerLaunch: 62,
      totalLaunches: 41,
      successes: 39,
      failures: 2
    }, { // Rocket info
      name: 'Saturn V',
      manufacturer: ['Boeing', 'North American', 'Douglas'],
      country: 'USA',
      description: 'The Saturn V (spoken as "Saturn five") was an American human-rated expendable rocket used by NASA between 1967 and 1973. The three-stage liquid-fueled super heavy-lift launch vehicle was developed to support the Apollo program for human exploration of the Moon and was later used to launch Skylab, the first American space station. The Saturn V was launched 13 times from the Kennedy Space Center in Florida with no loss of crew or payload. As of 2017, the Saturn V remains the tallest, heaviest, and most powerful (highest total impulse) rocket ever brought to operational status, and holds records for the heaviest payload launched and largest payload capacity to low Earth orbit (LEO) of 140,000 kg (310,000 lb), which included the third stage and unburned propellant needed to send the Apollo Command/Service Module and Lunar Module to the Moon.',
      firstFlight: 'November 9, 1967',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Skylab-73-HC-440HR.jpg/1024px-Skylab-73-HC-440HR.jpg',
        description: 'The last Saturn V launch carried the Skylab space station to low Earth orbit in place of the third stage'
      },
      // Rocket stats
      height: 110.6,
      payload: 140000,
      stages: 3,
      costPerLaunch: 185,
      totalLaunches: 13,
      successes: 12,
      failures: 1
    }
  ])
  .then((rocket) => console.log(`${rocket.length} rockets created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
