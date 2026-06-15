type getAlunoDto = {
    _id: string;
    nome: string;
    email: string;
    cursos: string[];
}

type CreateAlunoDto = {
    nome: string;
    email: string;
    senha: string;
    avatarUrl: string;
    interesses: string[];
}

type UpdateAlunoDto = Partial<CreateAlunoDto>;

export type { getAlunoDto, CreateAlunoDto, UpdateAlunoDto };