import AvaliacaoModel, { IAvaliacao } from './avaliacoes.model';

export class AvaliacaoRepository {
    async create(data: Partial<IAvaliacao>): Promise<IAvaliacao> {
        return await AvaliacaoModel.create(data);
    }
    async findAll(): Promise<IAvaliacao[]> {
        return await AvaliacaoModel.find();
    }
    async findById(id: string): Promise<IAvaliacao | null> {
        return await AvaliacaoModel.findById(id);
    }
    async update(id: string, data: Partial<IAvaliacao>): Promise<IAvaliacao | null> {
        return await AvaliacaoModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id: string): Promise<IAvaliacao | null> {
        return await AvaliacaoModel.findByIdAndUpdate(id, { ativo: false }, { new: true });
    }
}
export default AvaliacaoRepository;