import MatriculaRepository from './matricula.repository';
import { CreateMatriculaDto, UpdateMatriculaDto, GetMatriculaDto } from './matricula.dto';
import { IMatricula } from './matricula.model';

export class MatriculaService {
    private repository: MatriculaRepository;

    constructor() {
        this.repository = new MatriculaRepository();
    }

    async create(dto: CreateMatriculaDto): Promise<GetMatriculaDto> {
        const data = this.mapDtoToModel(dto);
        const created = await this.repository.create(data);
        return this.mapToGetDto(created);
    }

    async getAll(): Promise<GetMatriculaDto[]> {
        const matriculas = await this.repository.findAll();
        return matriculas.map((m) => this.mapToGetDto(m));
    }

    async getById(id: string): Promise<GetMatriculaDto | null> {
        const matricula = await this.repository.findById(id);
        if (!matricula) return null;
        return this.mapToGetDto(matricula);
    }

    async update(id: string, dto: UpdateMatriculaDto): Promise<GetMatriculaDto | null> {
        const data = this.mapDtoToModel(dto);
        const updated = await this.repository.update(id, data);
        if (!updated) return null;
        return this.mapToGetDto(updated);
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.repository.delete(id);
        return !!result;
    }

    private mapDtoToModel(dto: Partial<CreateMatriculaDto>): Partial<IMatricula> {
        const modelData: any = { ...dto };
        if (dto.alunoId) modelData.aluno = dto.alunoId;
        if (dto.cursoId) modelData.curso = dto.cursoId;
        
        delete modelData.alunoId;
        delete modelData.cursoId;
        return modelData;
    }

    private mapToGetDto(model: IMatricula): GetMatriculaDto {
        return {
            id: model._id.toString(),
            alunoId: model.aluno.toString(),
            cursoId: model.curso.toString(),
            dataMatricula: model.dataMatricula,
            status: model.status,
            // Campos presentes na Entidade/DTO mas opcionais no Model simplificado
            progressoPct: (model as any).progressoPct || 0,
            dataConclusao: (model as any).concluidoEm || null,
            aulasAssistidas: (model as any).aulasAssistidas || [],
        };
    }
}