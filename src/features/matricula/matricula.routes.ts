import { Router } from 'express';
import type { Request, Response } from 'express';
import { MatriculaService } from './matricula.service.ts';

const matriculaRouter = Router();
const service = new MatriculaService();

matriculaRouter.post('/', async (req: Request, res: Response) => {
    const result = await service.create(req.body);
    res.status(201).json(result);
});

matriculaRouter.get('/', async (req: Request, res: Response) => {
    const result = await service.getAll();
    res.json(result);
});

matriculaRouter.get('/:id', async (req: Request, res: Response) => {
    const result = await service.getById(req.params.id as string);
    if (!result) return res.status(404).json({ message: 'Matrícula não encontrada' });
    res.json(result);
});

matriculaRouter.put('/:id', async (req: Request, res: Response) => {
    const result = await service.update(req.params.id as string, req.body);
    if (!result) return res.status(404).json({ message: 'Matrícula não encontrada' });
    res.json(result);
});

matriculaRouter.delete('/:id', async (req: Request, res: Response) => {
    const success = await service.delete(req.params.id as string);
    if (!success) return res.status(404).json({ message: 'Matrícula não encontrada' });
    res.status(204).send();
});

export default matriculaRouter;