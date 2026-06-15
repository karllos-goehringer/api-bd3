import {MatriculaModel, IMatricula} from './matricula.model';
export class MatriculaRepository {
    async create(data: Partial<IMatricula>): Promise<IMatricula> {
        return await MatriculaModel.create(data);
    }
    async findAll(): Promise<IMatricula[]> {
        return await MatriculaModel.find();
    }
    async findById(id: string): Promise<IMatricula | null> {
        return await MatriculaModel.findById(id);
    }
    async update(id: string, data: Partial<IMatricula>): Promise<IMatricula | null> {
        return await MatriculaModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id: string): Promise<IMatricula | null> {
        return await MatriculaModel.findByIdAndUpdate(id, { ativo: false }, { new: true });
    }
}
export default MatriculaRepository;