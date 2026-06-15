class Professor {
    private _id: string;
    private _nome:string;
    private _email:string;
    private _senhaHash:string;
    private _cursos:string[];
    private _criadoEm:Date;
    private _atualizadoEm:Date;
    private _ativo:boolean;
    constructor(_id: string, _nome: string, _email: string, _senhaHash: string, _cursos: string[], _criadoEm: Date, _atualizadoEm: Date, _ativo: true) {
        this._id = _id;
        this._nome = _nome;
        this._email = _email;
        this._senhaHash = _senhaHash;
        this._cursos = _cursos;
        this._criadoEm = _criadoEm;
        this._atualizadoEm = _atualizadoEm;
        this._ativo = _ativo;
    }
}