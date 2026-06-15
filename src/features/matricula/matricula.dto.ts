type CreateMatriculaDto = {
    alunoId: string;
    cursoId: string;
}

type UpdateMatriculaDto = Partial<CreateMatriculaDto>;

type GetMatriculaDto = {
    id: string;
    alunoId: string;
    cursoId: string;
    dataMatricula: Date;
    progressoPct: number;
    status: string;
    dataConclusao: Date | null;
    aulasAssistidas: string[];
}

export type { CreateMatriculaDto, UpdateMatriculaDto, GetMatriculaDto };