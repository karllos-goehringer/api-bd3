type CreateProfessorDto = {
    nome: string;
    email: string;
    senha: string;
    cursos: string[];
}

type UpdateProfessorDto = Partial<CreateProfessorDto>;
type GetProfessorDto = {
    id: string;
    nome: string;
    email: string;
    cursos: string[];
    criadoEm: Date;
    atualizadoEm: Date;
    ativo: boolean;
}

export { CreateProfessorDto, UpdateProfessorDto, GetProfessorDto };