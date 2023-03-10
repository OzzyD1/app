'use strict';

// import all required modules
import logger from '../utils/logger.js';
import raceStore from '../models/race-store.js';

const series = {
  index(request, response) {
    const seriesId = request.params.id;
    logger.debug('Series id = ' + seriesId);
    const viewData = {
      title: 'Series',
    };
    response.render('series', viewData);
  },
};

export default series;