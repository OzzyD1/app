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
    return _.find(this.raceCollection, { id: id });
  },
  
  removeRace(id, raceId) {
    const series = this.getSeries(id);
    // remove the race with id raceID from the playlist
    _.remove(series.race, { id: raceId });
  },
  
  removeSeries(id) {
    _.remove(this.raceCollection, { id: id });
  },
  
  addRace(id, race) {
  const series = this.getSeries(id);
  series.race.push(race);
  },

};

// export the playlistStore object so it can be used elsewhere
export default raceStore;