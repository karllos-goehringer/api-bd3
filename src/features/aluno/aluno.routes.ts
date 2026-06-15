import { Router } from 'express';
import type { Request, Response } from 'express';
import { AlunoService } from './aluno.service.ts';

const alunoRouter = Router();
const service = new AlunoService();

alunoRouter.post('/', async (req: Request, res: Response) => {
    const result = await service.create(req.body);
    res.status(201).json(result);
});

alunoRouter.get('/', async (req: Request, res: Response) => {
    const result = await service.getAll();
    res.json(result);
});

alunoRouter.get('/:id', async (req: Request, res: Response) => {
    const result = await service.getById(req.params.id as string);
    if (!result) return res.status(404).json({ message: 'Aluno não encontrado' });
    res.json(result);
});

alunoRouter.put('/:id', async (req: Request, res: Response) => {
    const result = await service.update(req.params.id as string, req.body);
    if (!result) return res.status(404).json({ message: 'Aluno não encontrado' });
    res.json(result);
});

alunoRouter.delete('/:id', async (req: Request, res: Response) => {
    const success = await service.delete(req.params.id as string);
    if (!success) return res.status(404).json({ message: 'Aluno não encontrado' });
    res.status(204).send();
});

export default alunoRouter;