import mongoose from 'mongoose';

export interface IAluno extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    nome: string;
    email: string;
    senha: string;
    avatarUrl: string;
    interesses: string[];
    cursos: string[];
    criadoEm: Date;
    atualizadoEm: Date;
    ativo: boolean;
}

const AlunoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    interesses: { type: [String], required: true },
    cursos: { type: [String], default: [] },
    ativo: { type: Boolean, default: true },
}, { timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }, versionKey: false });

export const AlunoModel = mongoose.model<IAluno>('Aluno', AlunoSchema);

export default AlunoModel;