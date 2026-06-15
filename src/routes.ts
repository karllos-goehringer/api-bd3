import { Router } from 'express';
import alunoRouter from './features/aluno/aluno.routes.ts';
import aulaRouter from './features/aula/aula.routes.ts';
import avaliacaoRouter from './features/avaliacoes/avaliacoes.routes.ts';
import cursoRouter from './features/curso/curso.routes.ts';
import matriculaRouter from './features/matricula/matricula.routes.ts';
import professorRouter from './features/professor/professor.routes.ts';

const mainRouter = Router();

mainRouter.use('/alunos', alunoRouter);
mainRouter.use('/aulas', aulaRouter);
mainRouter.use('/avaliacoes', avaliacaoRouter);
mainRouter.use('/cursos', cursoRouter);
mainRouter.use('/matriculas', matriculaRouter);
mainRouter.use('/professores', professorRouter);
export default mainRouter;