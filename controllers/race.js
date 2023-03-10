'use strict';

// import all required modules
import logger from '../utils/logger.js';
import raceStore from '../models/race-store.js';

const race = {
  index(request, response) {
    const raceId = request.params.id;
    logger.debug('Race id = ' + raceId);
    const viewData = {
      title: 'Race',
    };
    response.render('race', viewData);
  },
};

export default race;
