import {AulaModel, IAula} from './aula.model';

export class AulaRepository {
    async create(data: Partial<IAula>): Promise<IAula> {
        return await AulaModel.create(data);
    }
    async findAll(): Promise<IAula[]> {
        return await AulaModel.find();
    }
    async findById(id: string): Promise<IAula | null> {
        return await AulaModel.findById(id);
    }
    async update(id: string, data: Partial<IAula>): Promise<IAula | null> {
        return await AulaModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id: string): Promise<IAula | null> {
        return await AulaModel.findByIdAndUpdate(id, { ativo: false }, { new: true });
    }
}