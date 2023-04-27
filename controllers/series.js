'use strict';

// import all required modules
import logger from '../utils/logger.js';
import raceStore from '../models/race-store.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';

const series = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const seriesId = request.params.id;
    logger.debug('Series id = ' + seriesId);
    const viewData = {
      title: 'Series',
      series: raceStore.getSeries(seriesId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      avatar: loggedInUser.avatar
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
  
  addRace(request, response) {
    const seriesId = request.params.id;
    const series = raceStore.getSeries(seriesId);
    const newRace = {
      id: uuidv4(),
      raceNo: request.body.raceNo,
      track: request.body.track,
      position: request.body.position,
      fLap: request.body.fLap,
    };
    raceStore.addRace(seriesId, newRace);
    response.redirect('/series/' + seriesId);
  },
  
  updateRace(request, response) {
  const seriesId = request.params.id;
  const raceId = request.params.raceid;
  logger.debug("updating race " + raceId);
  const updatedRace = {
    id: raceId,
    raceNo: request.body.raceNo,
    track: request.body.track,
    position: request.body.position,
    durafLaption: request.body.fLap
  };
  raceStore.editRace(seriesId, raceId, updatedRace);
  response.redirect('/series/' + seriesId);
  }
  
};

export default series;