import { Router } from 'express';
import type { Request, Response } from 'express';
import ProfessorService from './professor.service.ts';

const professorRouter = Router();
const service = new ProfessorService();

professorRouter.post('/', async (req: Request, res: Response) => {
    const result = await service.create(req.body);
    res.status(201).json(result);
});

professorRouter.get('/', async (req: Request, res: Response) => {
    const result = await service.getAll();
    res.json(result);
});

professorRouter.get('/:id', async (req: Request, res: Response) => {
    const result = await service.getById(req.params.id as string);
    if (!result) return res.status(404).json({ message: 'Professor não encontrado' });
    res.json(result);
});

professorRouter.put('/:id', async (req: Request, res: Response) => {
    const result = await service.update(req.params.id as string, req.body);
    if (!result) return res.status(404).json({ message: 'Professor não encontrado' });
    res.json(result);
});

professorRouter.delete('/:id', async (req: Request, res: Response) => {
    const success = await service.delete(req.params.id as string);
    if (!success) return res.status(404).json({ message: 'Professor não encontrado' });
    res.status(204).send();
});

export default professorRouter;