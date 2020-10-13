import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
  async index(req: Request, res: Response) {
    const orphanagesRepo = getRepository(Orphanage);

    const orphanages = await orphanagesRepo.find({
      select: ['id', 'name', 'latitude', 'longitude'],
    });

    res.status(200).json(orphanages);
  },

  async showById(req: Request, res: Response) {
    const { id } = req.params;

    const orphanagesRepo = getRepository(Orphanage);

    const orphanage = await orphanagesRepo.findOneOrFail(id);

    res.status(200).json(orphanage);
  },

  async create(req: Request, res: Response) {
    const {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanagesRepo = getRepository(Orphanage);

    const newOrphanage = orphanagesRepo.create({
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    await orphanagesRepo.save(newOrphanage);

    res.status(201).json(newOrphanage);
  },
};
