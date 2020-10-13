import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
// * Orphanages

routes.get('/', (req, res) => {
  res.json({ message: 'Oi' });
  console.log('Hello, world!!');
});

// - Create Orphanage
routes.post('/orphanages', OrphanagesController.create);

export default routes;
