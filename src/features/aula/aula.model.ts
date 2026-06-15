import moongoose from 'mongoose';
export interface IAula extends moongoose.Document {
    _id: moongoose.Types.ObjectId;
    titulo: string;
    descricao: string;
    videoUrl: string;
    duracaoSegundos: number;
    ordem: number;
    gratuito: boolean;
    criadoEm: Date;
    curso: moongoose.Types.ObjectId;
    ativo: boolean;
}
const AulaSchema = new moongoose.Schema({
    _id: { type: moongoose.Schema.Types.ObjectId, auto: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    videoUrl: { type: String, required: true },
    duracaoSegundos: { type: Number, required: true },
    ordem: { type: Number, required: true },
    gratuito: { type: Boolean, required: true },
    criadoEm: { type: Date, default: Date.now },
    curso: { type: moongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
    ativo: { type: Boolean, default: true },
}, { versionKey: false });

export const AulaModel = moongoose.model<IAula>('Aula', AulaSchema);

export default AulaModel;