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
    this.store.addCollection(this.collection, series);
  },

  addRace(id, race) {
    const arrayName = "race";
    this.store.addItem(this.collection, id, arrayName, race);
  },
  
};

export default raceStore;