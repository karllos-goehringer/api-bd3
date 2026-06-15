import mongoose from 'mongoose';

export interface IAvaliacao extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    aluno: string;
    curso: string;
    notaMaxima: number;
    nota: number;
    comentario: string;
    criadoEm: Date;
    atualizadoEm: Date;
    ativo: boolean;
}
const AvaliacaoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    aluno: { type: String, required: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
    comentario: { type: String, required: true },
    ativo: { type: Boolean, default: true },
}, { timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }, versionKey: false });

export const AvaliacaoModel = mongoose.model<IAvaliacao>('Avaliacao', AvaliacaoSchema);

export default AvaliacaoModel; 