import mongoose, { Schema, Document } from 'mongoose';

export interface ICurso extends Document {
  titulo: string;
  descricao: string;
  professor: string;
  preco: number;
  nivel: string;
  status: string;
  tags: string[];
  criadoEm: Date;
  atualizadoEm: Date;
  ativo: boolean;
  aulas: string[];
  alunos: string[];
}

const CursoSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  instrutor: { type: String, required: true },
  preco: { type: Number, required: true },
  nivel: { type: String, required: true },
  status: { type: String, required: true },
  tags: { type: [String], required: true },
}, { timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }, versionKey: false });

export const CursoModel = mongoose.model<ICurso>('Curso', CursoSchema);