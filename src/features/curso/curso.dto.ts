type CreateCursoDto = {
    nome: string;
    descricao: string;
    professor: string;
    preco: number;
    nivel: string;
    status: string;
    tags: string[];
}
type UpdateCursoDto = Partial<CreateCursoDto>;

type GetCursoDto = {
    id: string;
    nome: string;
    descricao: string;
    professor: string;
    preco: number;
    nivel: string;
    status: string;
    tags: string[];
    criadoEm: Date;
    atualizadoEm: Date;
    ativo: boolean;
    aulas: string[];
    alunos: string[];
}

export { CreateCursoDto, UpdateCursoDto, GetCursoDto };