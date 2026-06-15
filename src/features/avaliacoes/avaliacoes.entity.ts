class Avaliacao {
    private _cursoId: string;
    private _alunoId: string;
    private _notaMaxima: number;
    private _nota: number;
    private _comentario: string;
    private _criadoEm: Date;
    private _atualizadoEm: Date;
    private _ativo: boolean;

    constructor(cursoId: string, alunoId: string, notaMaxima: number, nota: number, comentario: string, ativo: boolean = true) {
        this._cursoId = cursoId;
        this._alunoId = alunoId;
        this._notaMaxima = notaMaxima;
        this._nota = nota;
        this._comentario = comentario;
        this._criadoEm = new Date();
        this._atualizadoEm = new Date();
        this._ativo = true;
    }
}