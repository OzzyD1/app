'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const raceStore = {

  store: new JsonStore('./models/race-store.json', { raceCollection: [] }),
  collection: 'raceCollection',

  getAllSeries() {
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
    const playlist = this.getPlaylist(id);
    this.store.removeCollection(this.collection, playlist);
  },

  removeAllPlaylists() {
    this.store.removeAll(this.collection);
  },

  addPlaylist(playlist) {
    this.store.addCollection(this.collection, playlist);
  },

  addSong(id, song) {
    const arrayName = "songs";
    this.store.addItem(this.collection, id, arrayName, song);
  },

};

export default playlistStore;
