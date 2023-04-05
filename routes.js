'use strict';

// import express and initialise router
import express from 'express';
const router = express.Router();

// import controllers
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import series from './controllers/series.js';
import accounts from './controllers/accounts.js';

// connect routes to controllers
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/series/:id', series.index);
router.get('/series/:id/deleteRace/:raceid', series.deleteRace);
router.get('/dashboard/deleteseries/:id', dashboard.deleteSeries);

router.post('/series/:id/addrace', series.addRace);
router.post('/dashboard/addseries', dashboard.addSeries);
router.post('/series/:id/updaterace/:raceid', series.updateRace);


// export router module
export default router;
