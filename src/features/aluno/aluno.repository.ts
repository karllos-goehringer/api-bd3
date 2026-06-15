import {AlunoModel, IAluno} from './aluno.model';
export class AlunoRepository {
    async create(data: Partial<IAluno>): Promise<IAluno> {
        return await AlunoModel.create(data);
    }
    async findAll(): Promise<IAluno[]> {
        return await AlunoModel.find();
    }
    async findById(id: string): Promise<IAluno | null> {
        return await AlunoModel.findById(id);
    }
    async update(id: string, data: Partial<IAluno>): Promise<IAluno | null> {
        return await AlunoModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id: string): Promise<IAluno | null> {
        return await AlunoModel.findByIdAndUpdate(id, { ativo: false }, { new: true });
    }
}
export default AlunoRepository;