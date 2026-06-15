import moongose from 'mongoose';

export interface IAvaliacao extends moongose.Document {
    _id: moongose.Types.ObjectId;
    aluno: string;
    curso: string;
    notaMaxima: number;
    nota: number;
    comentario: string;
    criadoEm: Date;
    atualizadoEm: Date;
    ativo: boolean;
}
const AvaliacaoSchema = new moongose.Schema({
    _id: { type: moongose.Schema.Types.ObjectId, auto: true },
    aluno: { type: String, required: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
    comentario: { type: String, required: true },
    ativo: { type: Boolean, default: true },
}, { timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }, versionKey: false });

export const AvaliacaoModel = moongose.model<IAvaliacao>('Avaliacao', AvaliacaoSchema);

export default AvaliacaoModel; 