import { Router } from 'express';
import type { Request, Response } from 'express';
import AulaService from './aula.service.ts';

const aulaRouter = Router();
const service = new AulaService();

aulaRouter.post('/', async (req: Request, res: Response) => {
    const result = await service.create(req.body);
    res.status(201).json(result);
});

aulaRouter.get('/', async (req: Request, res: Response) => {
    const result = await service.getAll();
    res.json(result);
});

aulaRouter.get('/:id', async (req: Request, res: Response) => {
    const result = await service.getById(req.params.id as string);
    if (!result) return res.status(404).json({ message: 'Aula não encontrada' });
    res.json(result);
});

aulaRouter.put('/:id', async (req: Request, res: Response) => {
    const result = await service.update(req.params.id as string, req.body);
    if (!result) return res.status(404).json({ message: 'Aula não encontrada' });
    res.json(result);
});

aulaRouter.delete('/:id', async (req: Request, res: Response) => {
    const success = await service.delete(req.params.id as string);
    if (!success) return res.status(404).json({ message: 'Aula não encontrada' });
    res.status(204).send();
});

export default aulaRouter;