import ProfessorRepository from "./professor.repository.ts";
import type { CreateProfessorDto, UpdateProfessorDto, GetProfessorDto } from "./professor.dto.ts";
import type { IProfessor } from "./professor.model.ts";

export class ProfessorService {
    private repository: ProfessorRepository;
    constructor() {
        this.repository = new ProfessorRepository();
    }
    async create(dto: CreateProfessorDto): Promise<GetProfessorDto> {
        const data = this.mapDtoToModel(dto);
        const created = await this.repository.create(data);
        return this.mapToGetDto(created);
    }
    async getAll(): Promise<GetProfessorDto[]> {
        const professores = await this.repository.findAll();
        return professores.map((p) => this.mapToGetDto(p));
    }
    async getById(id: string): Promise<GetProfessorDto | null> {
        const professor = await this.repository.findById(id);
        if (!professor) return null;
        return this.mapToGetDto(professor);
    }
    async update(id: string, dto: UpdateProfessorDto): Promise<GetProfessorDto | null> {
        const data = this.mapDtoToModel(dto);
        const updated = await this.repository.update(id, data);
        if (!updated) return null;
        return this.mapToGetDto(updated);
    }
    async delete(id: string): Promise<boolean> {
        const result = await this.repository.delete(id);
        return !!result;
    }
    private mapDtoToModel(dto: Partial<CreateProfessorDto>): Partial<IProfessor> {
        return { ...dto };
    }
    private mapToGetDto(model: IProfessor): GetProfessorDto {
        return { 
            id: model._id.toString(),
            nome: model.nome,
            email: model.email,
            cursos: model.cursos,
            criadoEm: model.criadoEm,
            atualizadoEm: model.atualizadoEm,
            ativo: model.ativo
        };
    }
}
export default ProfessorService;