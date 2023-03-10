'use strict';

import { createRequire } from "module";
import _ from 'lodash';

const require = createRequire(import.meta.url);
const raceCollection = require("./race-store.json");

const raceStore = {

  // import the races collection object
  raceCollection: raceCollection.raceCollection,

  // function to get all of the races
  getAllRaces() {
    return this.raceCollection;
  },
  
  //   Gets the ID of the race series
  getSeries(id) {
    return _.find(this.RaceCollection, { id: id });
  },
};

// export the playlistStore object so it can be used elsewhere
export default raceStore;