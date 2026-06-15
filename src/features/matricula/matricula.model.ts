import moongoose from 'mongoose';
import { IAluno } from '../aluno/aluno.model';
import { ICurso } from '../curso/curso.model';

export interface IMatricula extends moongoose.Document {
    _id: moongoose.Types.ObjectId;
    aluno: IAluno['_id'];
    curso: ICurso['_id'];
    dataMatricula: Date;
    status: string;
}

const MatriculaSchema = new moongoose.Schema({
    _id: { type: moongoose.Schema.Types.ObjectId, auto: true },
    aluno: { type: moongoose.Schema.Types.ObjectId, ref: 'Aluno', required: true },
    curso: { type: moongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
    dataMatricula: { type: Date, default: Date.now },
    status: { type: String, default: 'pendente' },
}, { timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }, versionKey: false });

export const MatriculaModel = moongoose.model<IMatricula>('Matricula', MatriculaSchema);

export default MatriculaModel;