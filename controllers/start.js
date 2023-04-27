'use strict';

import logger from '../utils/logger.js';
import raceStore from '../models/race-store.js';
import accounts from './accounts.js';

const start = {

  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');
    
    if(loggedInUser){
    const series = raceStore.getAllRaces();
    let numSeries = series.length;
    let numRaces = 0;
    for (let item of series) {
        numRaces += item.race.length;
    }

    logger.info('start rendering');

    const viewData = {
      title: 'Welcome to the Sim Race Tracker App!',
      totalSeries: numSeries,
      totalRaces: numRaces,
      averageRaces: raceStore.averageRaces(),
      mostRaces: raceStore.mostRaces(),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      avatar: loggedInUser.avatar
    };

    response.render('start', viewData);
    }
    else response.redirect('/');
  },
};

export default start;