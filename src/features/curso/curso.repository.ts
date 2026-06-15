import { CursoModel, type ICurso } from './curso.model.ts';

export class CursoRepository {
  async create(data: Partial<ICurso>): Promise<ICurso> {
    return await CursoModel.create(data);
  }

  async findAll(): Promise<ICurso[]> {
    return await CursoModel.find();
  }

  async findById(id: string): Promise<ICurso | null> {
    return await CursoModel.findById(id);
  }

  async update(id: string, data: Partial<ICurso>): Promise<ICurso | null> {
    return await CursoModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ICurso | null> {
    return await CursoModel.findByIdAndUpdate(id, { ativo: false }, { new: true });
  }
}