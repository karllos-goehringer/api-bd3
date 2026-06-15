import {ProfessorModel, IProfessor } from "./professor.model";
export class ProfessorRepository {
    async create(data: Partial<IProfessor>): Promise<IProfessor> {
        return await ProfessorModel.create(data);
    }
    async findAll(): Promise<IProfessor[]> {
        return await ProfessorModel.find();
    }
    async findById(id: string): Promise<IProfessor | null> {
        return await ProfessorModel.findById(id);
    }
    async update(id: string, data: Partial<IProfessor>): Promise<IProfessor | null> {
        return await ProfessorModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id: string): Promise<IProfessor | null> {
        return await ProfessorModel.findByIdAndUpdate(id, { ativo: false }, { new: true });
    }
}
export default ProfessorRepository;