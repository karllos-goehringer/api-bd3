import mongoose from 'mongoose';
import type { IAluno } from '../aluno/aluno.model.ts';
import type { ICurso } from '../curso/curso.model.ts';

export interface IMatricula extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    aluno: IAluno['_id'];
    curso: ICurso['_id'];
    dataMatricula: Date;
    status: string;
}

const MatriculaSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'Aluno', required: true },
    curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
    dataMatricula: { type: Date, default: Date.now },
    status: { type: String, default: 'pendente' },
}, { timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }, versionKey: false });

export const MatriculaModel = mongoose.model<IMatricula>('Matricula', MatriculaSchema);

export default MatriculaModel;