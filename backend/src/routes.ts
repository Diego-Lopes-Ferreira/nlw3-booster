import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);
// * Orphanages

routes.get('/', (req, res) => {
  res.json({ message: 'Oi' });
  console.log('Hello, world!!');
});

// - Create Orphanage
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.showById);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;
