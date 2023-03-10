'use strict';

// import all required modules
import logger from '../utils/logger.js';
import developersStore from '../models/developer-store.js'

// create dashboard object
const about = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // display confirmation message in log
    logger.info('about rendering');

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'About The Sim Race Tracker App!',
      developers: developersStore.getAllDevelopers(),
    };

    // render the dashboard view and pass through the data
    response.render('about', viewData);
  },
};

// export the dashboard module
export default about;
