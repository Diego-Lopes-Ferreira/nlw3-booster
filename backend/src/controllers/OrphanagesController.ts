import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

import * as Yup from 'yup';

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
      return { path: image.filename.split(' ').join('') };
    });

    const data = {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ).notRequired(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const newOrphanage = orphanagesRepo.create(data);

    await orphanagesRepo.save(newOrphanage);

    res.status(201).json(newOrphanage);
  },
};
