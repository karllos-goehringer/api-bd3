import { Router } from 'express';
import type { Request, Response } from 'express';
import { CursoService } from './curso.service.ts';

const cursoRouter = Router();
const service = new CursoService();

cursoRouter.post('/', async (req: Request, res: Response) => {
    const result = await service.create(req.body);
    res.status(201).json(result);
});

cursoRouter.get('/', async (req: Request, res: Response) => {
    const result = await service.getAll();
    res.json(result);
});

cursoRouter.get('/:id', async (req: Request, res: Response) => {
    const result = await service.getById(req.params.id as string);
    if (!result) return res.status(404).json({ message: 'Curso não encontrado' });
    res.json(result);
});

cursoRouter.put('/:id', async (req: Request, res: Response) => {
    const result = await service.update(req.params.id as string, req.body);
    if (!result) return res.status(404).json({ message: 'Curso não encontrado' });
    res.json(result);
});

cursoRouter.delete('/:id', async (req: Request, res: Response) => {
    const success = await service.delete(req.params.id as string);
    if (!success) return res.status(404).json({ message: 'Curso não encontrado' });
    res.status(204).send();
});

export default cursoRouter;