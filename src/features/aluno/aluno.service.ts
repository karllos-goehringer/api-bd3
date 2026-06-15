import AlunoRepository from './aluno.repository';
import {  getAlunoDto, CreateAlunoDto, UpdateAlunoDto } from './aluno.dto';
import { IAluno } from './aluno.model';
export class AlunoService {
    private repository: AlunoRepository;
    constructor() {
        this.repository = new AlunoRepository();
    }
    async create(dto: CreateAlunoDto): Promise<getAlunoDto> {
        const data = this.mapDtoToModel(dto);
        const created = await this.repository.create(data);
        return this.mapToGetDto(created);
    }
    async getAll(): Promise<getAlunoDto[]> {
        const alunos = await this.repository.findAll();
        return alunos.map((a) => this.mapToGetDto(a));
    }
    async getById(id: string): Promise<getAlunoDto | null> {
        const aluno = await this.repository.findById(id);
        if (!aluno) return null;
        return this.mapToGetDto(aluno);
    }
    async update(id: string, dto: UpdateAlunoDto): Promise<getAlunoDto | null> {
        const data = this.mapDtoToModel(dto);
        const updated = await this.repository.update(id, data);
        if (!updated) return null;
        return this.mapToGetDto(updated);
    }
    async delete(id: string): Promise<boolean> {
        const result = await this.repository.delete(id);
        return !!result;
    }
    private mapDtoToModel(dto: Partial<CreateAlunoDto>): Partial<IAluno> {
        return { ...dto };
    }
    private mapToGetDto(model: IAluno): getAlunoDto {
        return {
            _id: model._id.toString(),
            nome: model.nome,
            email: model.email,
            cursos: model.cursos,
        };
    }
}