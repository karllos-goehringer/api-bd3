import { Router } from 'express';
import type { Request, Response } from 'express';
import AvaliacaoService from './avaliacoes.service.ts';

const avaliacaoRouter = Router();
const service = new AvaliacaoService();

avaliacaoRouter.post('/', async (req: Request, res: Response) => {
    const result = await service.create(req.body);
    res.status(201).json(result);
});

avaliacaoRouter.get('/', async (req: Request, res: Response) => {
    const result = await service.getAll();
    res.json(result);
});

avaliacaoRouter.get('/:id', async (req: Request, res: Response) => {
    const result = await service.getById(req.params.id as string);
    if (!result) return res.status(404).json({ message: 'Avaliação não encontrada' });
    res.json(result);
});

avaliacaoRouter.put('/:id', async (req: Request, res: Response) => {
    const result = await service.update(req.params.id as string, req.body);
    if (!result) return res.status(404).json({ message: 'Avaliação não encontrada' });
    res.json(result);
});

avaliacaoRouter.delete('/:id', async (req: Request, res: Response) => {
    const success = await service.delete(req.params.id as string);
    if (!success) return res.status(404).json({ message: 'Avaliação não encontrada' });
    res.status(204).send();
});

export default avaliacaoRouter;