import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

import orphanageView from '../views/orphanages_view';

export default {
  async index(req: Request, res: Response) {
    const orphanagesRepo = getRepository(Orphanage);

    const orphanages = await orphanagesRepo.find({
      select: ['id', 'name', 'latitude', 'longitude'],
      relations: ['images'],
    });

    res.status(200).json(orphanageView.renderMany(orphanages));
  },

  async showById(req: Request, res: Response) {
    const { id } = req.params;

    const orphanagesRepo = getRepository(Orphanage);

    const orphanage = await orphanagesRepo.findOneOrFail(id, {
      relations: ['images'],
    });

    res.status(200).json(orphanageView.render(orphanage));
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

    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const newOrphanage = orphanagesRepo.create({
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanagesRepo.save(newOrphanage);

    res.status(201).json(newOrphanage);
  },
};
