type GetAvaliacaoDto = {
    id: string;
    cursoId: string;
    alunoId: string;
    notaMaxima: number;
    nota: number;
    comentario: string;
    criadoEm: Date;
    atualizadoEm: Date;
    ativo: boolean;
}
type CreateAvaliacaoDto = {
    cursoId: string;
    alunoId: string;
    notaMaxima: number;
    nota?: number;
    comentario?: string;
    criadoEm?: Date;
    atualizadoEm?: Date;
    ativo?: boolean;
}
type UpdateAvaliacaoDto = Partial<CreateAvaliacaoDto>;

export { GetAvaliacaoDto, CreateAvaliacaoDto, UpdateAvaliacaoDto };
