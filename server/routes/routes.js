import express from 'express';

import { showServer, updateRules, showServers, newServer, deleteServer, updateServer } from '../controllers/servers.js';
import { showScreenshots, newScreenshot, deleteScreenshot } from '../controllers/screenshots.js';
import { fetchHomePage, signIn, updateHomePage } from '../controllers/homePage.js';


const router = express.Router();

// intro data
router.get('/', fetchHomePage);
router.patch('/', updateHomePage)
//screenshots
router.get('/screenshots', showScreenshots);
router.post('/screenshots', newScreenshot);
router.delete('/screenshots/:id', deleteScreenshot);
// rules 
router.get('/servers/:id', showServer);
router.post('/servers/:id', updateRules);
// servers
router.get('/servers', showServers);
router.post('/servers', newServer);
router.delete('/servers/:id', deleteServer);
router.patch('/servers/:id', updateServer);
// login
router.get('/login/:username&:password', signIn);

export default router;