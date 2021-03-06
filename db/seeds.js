const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Rocket = require('../models/rocket');
const User = require('../models/user');
const Message = require('../models/message');

Rocket.collection.drop();
User.collection.drop();
Message.collection.drop();

Rocket
  .create([
    { // Rocket info
      name: 'Falcon 9',
      manufacturer: 'SpaceX',
      country: 'USA',
      description: 'Falcon 9 is a family of two-stage-to-orbit launch vehicles, named for its use of nine first-stage engines, designed and manufactured by SpaceX. The Falcon 9 versions are Falcon 9 v1.0 (retired), Falcon 9 v1.1 (retired), and the current Falcon 9 Full Thrust, a partially-reusable launch system. Both stages are powered by rocket engines that burn liquid oxygen (LOX) and rocket-grade kerosene (RP-1) propellants. The first stage is designed to be reusable, while the second stage is not.',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Iridium-1_Launch_%2832312419215%29.jpg',
        description: 'SpaceX’s Falcon 9 Full Thrust rocket lifts off from Vandenberg Air Force Base SLC-4E with the first ten Iridium NEXT communication satellites (January 2017).'
      }
    }, { // Rocket info
      name: 'Saturn V',
      manufacturer: ['Boeing', 'North American', 'Douglas'],
      country: 'USA',
      description: 'The Saturn V (spoken as "Saturn five") was an American human-rated expendable rocket used by NASA between 1967 and 1973. The three-stage liquid-fueled super heavy-lift launch vehicle was developed to support the Apollo program for human exploration of the Moon and was later used to launch Skylab, the first American space station. The Saturn V was launched 13 times from the Kennedy Space Center in Florida with no loss of crew or payload. As of 2017, the Saturn V remains the tallest, heaviest, and most powerful (highest total impulse) rocket ever brought to operational status, and holds records for the heaviest payload launched and largest payload capacity to low Earth orbit (LEO) of 140,000 kg (310,000 lb), which included the third stage and unburned propellant needed to send the Apollo Command/Service Module and Lunar Module to the Moon.',
      firstFlight: 'November 9, 1967',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Skylab-73-HC-440HR.jpg/1024px-Skylab-73-HC-440HR.jpg',
        description: 'The last Saturn V launch carried the Skylab space station to low Earth orbit in place of the third stage'
      }
    }, { // Rocket info
      name: 'Long March',
      manufacturer: 'CALT',
      country: 'China',
      description: 'The Long March 3B (Chinese: 长征三号乙火箭, Chang Zheng 3B), also known as the CZ-3B and LM-3B, is a Chinese orbital carrier rocket. Introduced in 1996, it is launched from Launch Area 2 and 3 at the Xichang Satellite Launch Center in Sichuan. A three-stage rocket with four strap-on liquid rocket boosters, it is currently the most powerful member of the Long March rocket family and the heaviest of the Long March 3 rocket family, and is mainly used to place communications satellites into geosynchronous orbits.',
      firstFlight: 'November 9, 1967',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/The_Launch_of_Long_March_3B_Rocket.jpg/1024px-The_Launch_of_Long_March_3B_Rocket.jpg',
        description: 'The launch of a Long March 3B carrier rocket at Xichang Satellite Launch Center.'
      }
    }, { // Rocket info
      name: 'Soyuz-2',
      manufacturer: 'TsSKB-Progress',
      country: 'Russia',
      description: 'Soyuz-2, GRAU index 14A14, is the collective designation for the new version of the Russian Soyuz rocket. In its basic form, it is a three-stage carrier rocket for placing payloads into low Earth orbit. The first-stage boosters and two core stages feature uprated engines with improved injection systems, compared to the previous versions of the Soyuz. Digital flight control and telemetry systems allow the rocket to be launched from a fixed launch platform, whereas the launch platforms for earlier Soyuz rockets had to be rotated as the rocket could not perform a roll to change its heading in flight.',
      firstFlight: 'November 9, 1967',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Soyuz_2_metop.jpg/540px-Soyuz_2_metop.jpg',
        description: 'A MetOp spacecraft ready for the launch atop a Soyuz-2.1a rocket.'
      }
    }, { // Rocket info
      name: 'Ariane 4',
      manufacturer: 'Arianespace',
      country: 'France',
      description: 'The Ariane 4 was an expendable launch system, designed by the Centre national d\'études spatiales while being manufactured and marketed by its subsidiary Arianespace. The launcher became justly known as the "workhorse" of the Ariane family. Since its first flight on 15 June 1988 until the final flight, which was performed on 15 February 2003, it attained 113 successful launches out of 116 launches to have been conducted.',
      firstFlight: 'November 9, 1967',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ariane4.jpg',
        description: 'The first ever Ariane 4 launch from Kourou on June 14, 1988'
      }
    }, { // Rocket info
      name: 'Falcon Heavy',
      manufacturer: 'SpaceX',
      country: 'USA',
      description: 'Falcon Heavy, previously known as the Falcon 9 Heavy, is a reusable super heavy lift space launch vehicle being designed and manufactured by SpaceX. The Falcon Heavy is a variant of the Falcon 9 launch vehicle and will consist of a strengthened Falcon 9 rocket core, with two additional Falcon 9 first stages as strap-on boosters. This will increase the low Earth orbit (LEO) maximum payload to 63.8 metric tonnes, compared to 22.8 tonnes for a Falcon 9 full thrust. Falcon Heavy was designed from the outset to carry humans into space, and would enable crewed missions to the Moon or Mars.',
      firstFlight: 'November 9, 1967',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Pad_39_A_Falcon_Heavy_Artist_Cropped.jpg/1024px-Pad_39_A_Falcon_Heavy_Artist_Cropped.jpg',
        description: 'Artist\'s representation of Falcon Heavy Reusable on launch pad'
      }
    }, { // Rocket info
      name: 'Delta IV',
      manufacturer: ['Boeing', 'BDS', 'ULA'],
      country: 'USA',
      description: 'Delta IV is an expendable launch system in the Delta rocket family. The rockets\' main components are designed by Boeing\'s Defense, Space & Security division and built in the United Launch Alliance (ULA) facility in Decatur, Alabama. Final assembly is completed at the launch site by ULA. The rockets were designed to launch payloads into orbit for the United States Air Force Evolved Expendable Launch Vehicle (EELV) program and commercial satellite business. Delta IV rockets are available in five versions: Medium, Medium+ (4,2), Medium+ (5,2), Medium+ (5,4), and Heavy, to cover a range of payload size and weight. Delta IV was primarily designed to satisfy the needs of the U.S. military.',
      firstFlight: 'November 9, 1967',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Delta_IV_Medium_Rocket_DSCS.jpg',
        description: 'Delta IV Medium launch carrying DSCS III-B6'
      }
    }
  ])
  .then((rocket) => console.log(`${rocket.length} rockets created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

User
  .create([{
    username: 'spaceman josh',
    email: 'josh@ga.co',
    password: 'memory',
    passwordConfirmation: 'memory',
    admin: true

  }])
  .then((user) => console.log(`${user.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
