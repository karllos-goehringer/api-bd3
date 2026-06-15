type CreateAulaDto = {
    titulo: string;
    descricao: string;
    cursoId: string;
    videoUrl: string;
    duracaoSegundos: number;
    ordem: number;
    gratuito: boolean;
};

type UpdateAulaDto = Partial<CreateAulaDto>;

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
};

export type { CreateAulaDto, UpdateAulaDto, GetAulaDto };