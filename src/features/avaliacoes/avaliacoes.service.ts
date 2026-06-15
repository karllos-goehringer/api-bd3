import {AvaliacaoRepository} from './avaliacoes.repository.ts';
import type { CreateAvaliacaoDto, UpdateAvaliacaoDto, GetAvaliacaoDto } from './avaliacoes.dto.ts';
import type { IAvaliacao } from './avaliacoes.model.ts';

export class AvaliacaoService {
    private repository: AvaliacaoRepository;
    constructor() {
        this.repository = new AvaliacaoRepository();
    }
    async create(dto: CreateAvaliacaoDto): Promise<GetAvaliacaoDto> {
        const data = this.mapDtoToModel(dto);
        const created = await this.repository.create(data);
        return this.mapToGetDto(created);
    }
    async getAll(): Promise<GetAvaliacaoDto[]> {
        const avaliacoes = await this.repository.findAll();
        return avaliacoes.map((a) => this.mapToGetDto(a));
    }
    async getById(id: string): Promise<GetAvaliacaoDto | null> {
        const avaliacao = await this.repository.findById(id);
        if (!avaliacao) return null;
        return this.mapToGetDto(avaliacao);
    }
    async update(id: string, dto: UpdateAvaliacaoDto): Promise<GetAvaliacaoDto | null> {
        const data = this.mapDtoToModel(dto);
        const updated = await this.repository.update(id, data);
        if (!updated) return null;
        return this.mapToGetDto(updated);
    }
    async delete(id: string): Promise<boolean> {
        const result = await this.repository.delete(id);
        return !!result;
    }
    private mapDtoToModel(dto: Partial<CreateAvaliacaoDto>): Partial<IAvaliacao> {
        return { ...dto };
    }
    private mapToGetDto(model: IAvaliacao): GetAvaliacaoDto {
        return { 
            id: model._id.toString(),
            alunoId: model.aluno,
            cursoId: model.curso,
            notaMaxima: model.notaMaxima,
            nota: model.nota,
            comentario: model.comentario,
            criadoEm: model.criadoEm,
            atualizadoEm: model.atualizadoEm,
            ativo: model.ativo
        };
    }
}
export default AvaliacaoService;