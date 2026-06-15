type GetAulaDto = {
    id: string;
    titulo: string;
    descricao: string;
    cursoId: string;
    videoUrl: string;
    duracaoSegundos: number;
    ordem: number;
    gratuito: boolean;
    criadoEm: Date;
    ativo: boolean;
}

type CreateAulaDto = {
    cursoId: string;
    titulo: string;
    descricao: string;
    videoUrl: string;
    duracaoSegundos: number;
    ordem: number;
    gratuito: boolean;
    criadoEm: Date;
    ativo: boolean;
}

type UpdateAulaDto = Partial<CreateAulaDto>;

export { GetAulaDto, CreateAulaDto, UpdateAulaDto };