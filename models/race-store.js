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
  
  editRace(id, raceId, updatedRace) {
    const arrayName = "race";
    this.store.editItem(this.collection, id, raceId, arrayName, updatedRace);
  },
  
  getUserSeries(userid) {
      return this.store.findBy(this.collection, (series => series.userid === userid));
  },
  
  averageRaces(){
    const races = this.store.findAll(this.collection);
    console.log(races);

    let totalRaces = 0;
    for (let i = 0; i < races.length; i++) {
      totalRaces += races[i].race.length;
    }

    let averageRaces = totalRaces / races.length;

    return averageRaces;
  },
  
//   mostRaces(){
//     const races = this.store.findAll(this.collection);
    
//     let mostRaces = 0;
//     let indexOfRace = 0;
    
//     for (let i = 0; i < races.length; i++){
//       const series = races[i];
//       const numOfRaces = series.race.length;
      
//       if (numOfRaces > mostRaces){
//         mostRaces = numOfRaces;
//         indexOfRace = i;
//       }
//     }
      
//     const mostRacesSeries = races[indexOfRace];
    
//     logger.info("Series with most wins: " + mostRacesSeries.title);
    
//     return mostRacesSeries.title;
//   },
};

export default raceStore;