'use strict';

import logger from '../utils/logger.js';
import raceStore from '../models/race-store.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';

const dashboard = {

  index(request, response) {

    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    
    
    if (loggedInUser) {
      const viewData = {
        title: 'Welcome to the Sim Race Tracker Dashboard!',
        races: raceStore.getAllRaces(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };

      // render the dashboard view and pass through the data
      logger.info('about to render', viewData.races);
      response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },
  
  deleteSeries(request, response) {
    const seriesId = request.params.id;
    logger.debug(`Deleting Series ${seriesId}`);
    raceStore.removeSeries(seriesId);
    response.redirect('/dashboard');
  },

  addSeries(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newSeries = {
      id: uuidv4(),
      userid: loggedInUser.id,
      series: request.body.series,
      race: [],
    };
    logger.debug('Creating a new Series' + newSeries);
    raceStore.addSeries(newSeries);
    response.redirect('/dashboard');
    },

};

// export the dashboard module
export default dashboard;
