'use strict';

// import express and initialise router
import express from 'express';
const router = express.Router();

// import controllers
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import series from './controllers/series.js';

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/series/:id', series.index);
router.get('/series/:id/deleteRace/:raceid', series.deleteRace);
router.get('/series/deleteseries/:id', series.deleteSeries);
router.post('/series/:id/addrace', series.addRace);
router.post('/dashboard/addseries', dashboard.addSeries);


// export router module
export default router;
