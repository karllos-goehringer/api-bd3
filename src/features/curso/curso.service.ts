import { CursoRepository } from './curso.repository.ts';
import type { CreateCursoDto, UpdateCursoDto, GetCursoDto } from './curso.dto.ts';
import type { ICurso } from './curso.model.ts';

export class CursoService {
  private repository: CursoRepository;

  constructor() {
    this.repository = new CursoRepository();
  }

  async create(dto: CreateCursoDto): Promise<GetCursoDto> {
    const data = this.mapDtoToModel(dto);
    const created = await this.repository.create(data);
    return this.mapToGetDto(created);
  }

  async getAll(): Promise<GetCursoDto[]> {
    const cursos = await this.repository.findAll();
    return cursos.map((c) => this.mapToGetDto(c));
  }

  async getById(id: string): Promise<GetCursoDto | null> {
    const curso = await this.repository.findById(id);
    if (!curso) return null;
    return this.mapToGetDto(curso);
  }

  async update(id: string, dto: UpdateCursoDto): Promise<GetCursoDto | null> {
    const data = this.mapDtoToModel(dto);
    const updated = await this.repository.update(id, data);
    if (!updated) return null;
    return this.mapToGetDto(updated);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete(id);
    return !!result;
  }

  private mapDtoToModel(dto: Partial<CreateCursoDto>): Partial<ICurso> {
    const modelData: any = { ...dto };
    if (dto.nome) {
      modelData.titulo = dto.nome;
      delete modelData.nome;
    }
    return modelData;
  }

  private mapToGetDto(model: ICurso): GetCursoDto {
    return {
      id: model._id.toString(),
      nome: model.titulo,
      descricao: model.descricao,
      professor: model.professor,
      preco: model.preco,
      nivel: model.nivel,
      status: model.status,
      tags: model.tags,
      criadoEm: model.criadoEm,
      atualizadoEm: model.atualizadoEm,
      ativo: model.ativo,
      aulas: model.aulas,
      alunos: model.alunos,
    };
  }
}