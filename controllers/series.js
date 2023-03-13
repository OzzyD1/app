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
      series: raceStore.getSeries(seriesId)
    };
    response.render('series', viewData);
  },
  
  deleteRace(request, response) {
    const seriesId = request.params.id;
    const raceId = request.params.raceid;
    logger.debug(`Deleting race ${raceId} from Series ${seriesId}`);
    raceStore.removeRace(seriesId, raceId);
    response.redirect('/series/' + seriesId);
  },

  deleteSeries(request, response) {
    const seriesId = request.params.id;
    logger.debug(`Deleting series ${seriesId}`);
    raceStore.removeSeries(seriesId);
    response.redirect('/dashboard/');
  },
  
  addSong(request, response) {
    const seriesId = request.params.id;
    const series = raceStore.getseries(seriesId);
    const newRace = {
      title: request.body.title,
      artist: request.body.artist,
    };
    raceStore.addSong(seriesId, newRace);
    response.redirect('/series/' + seriesId);
  },
  
};

export default series;