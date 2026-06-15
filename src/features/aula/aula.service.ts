import {AulaRepository} from './aula.repository';
import { CreateAulaDto, UpdateAulaDto, GetAulaDto } from './aula.dto';
import { IAula } from './aula.model';

export class AulaService {
    private aulaRepository: AulaRepository;
    constructor() {
        this.aulaRepository = new AulaRepository();
    }
    async create(dto: CreateAulaDto): Promise<GetAulaDto> {
        const data = this.mapDtoToModel(dto);
        const created = await this.aulaRepository.create(data);
        return this.mapToGetDto(created);
    }
    async getAll(): Promise<GetAulaDto[]> {
        const aulas = await this.aulaRepository.findAll();
        return aulas.map((aula: IAula) => this.mapToGetDto(aula));
    }
    async getById(id: string): Promise<GetAulaDto | null> {
        const aula = await this.aulaRepository.findById(id);
        if (!aula) return null;
        return this.mapToGetDto(aula);
    }
    async update(id: string, dto: UpdateAulaDto): Promise<GetAulaDto | null> {
        const data = this.mapDtoToModel(dto);
        const updated = await this.aulaRepository.update(id, data);
        if (!updated) return null;
        return this.mapToGetDto(updated);
    }
    async delete(id: string): Promise<boolean> {
        const result = await this.aulaRepository.delete(id);
        return !!result;
    }
    private mapDtoToModel(dto: Partial<CreateAulaDto>): Partial<IAula> {
        return { ...dto };
    }
    private mapToGetDto(model: IAula): GetAulaDto {
        return {
            id: model._id.toString(),
            titulo: model.titulo,
            descricao: model.descricao,
            cursoId: model.curso.toString(),
            videoUrl: model.videoUrl,
            duracaoSegundos: model.duracaoSegundos,
            ordem: model.ordem,
            gratuito: model.gratuito,
            criadoEm: model.criadoEm,
            ativo: model.ativo,
        };
    }
}
export default AulaService;