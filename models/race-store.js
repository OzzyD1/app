'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const raceStore = {

  store: new JsonStore('./models/race-store.json', { raceCollection: [] }),
  collection: 'raceCollection',

  getAllRaces() {
    return this.store.findAll(this.collection);
  },

  getSeries(id) {
    return this.store.findOneBy(this.collection, (collection => collection.id === id));
  },

  removeRace(id, raceId) {
    const arrayName = "race";
    this.store.removeItem(this.collection, id, arrayName, raceId);
  },

  removeSeries(id) {
    const series = this.getSeries(id);
    this.store.removeCollection(this.collection, series);
  },

  removeAllSeries() {
    this.store.removeAll(this.collection);
  },

  addSeries(series) {
    //initialises the variable with 0 when adding a new series
    series.averagePosition = 0;
    this.store.addCollection(this.collection, series);
  },

  addRace(id, race) {
    const arrayName = "race";
    this.store.addItem(this.collection, id, arrayName, race);
  },
  
  //This method is to calculate the average finishing position of the     series
  getAverageFinishingPosition(seriesId) {
    const series = this.getSeries(seriesId);
    let totalPosition = 0;
    for (const race of series.race) {
      totalPosition += parseInt(race.position);
    }
    const averagePosition = totalPosition / series.race.length;
    return averagePosition;
  }
};

export default raceStore;