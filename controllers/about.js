'use strict';

import logger from '../utils/logger.js';
import developersStore from '../models/developer-store.js';
import accounts from './accounts.js';

const about = {

  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('about rendering');

    if (loggedInUser) {
    const viewData = {
      title: 'About The Sim Race Tracker App!',
      developers: developersStore.getAllDevelopers(),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      avatar: loggedInUser.avatar
    };

    response.render('about', viewData);
    }
    else response.redirect('/'); 
  },
};

export default about;