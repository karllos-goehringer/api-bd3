class Curso {
    private _id: string;
    private titulo: string;
    private descricao: string;
    private professor: string;
    private preco: number;
    private nivel: string;
    private status: string;
    private tags: string[];
    private criadoEm: Date;
    private atualizadoEm: Date;
    private ativo: boolean;
    private aulas: string[];
    private alunos: string[];
    
    constructor(_id: string, titulo: string, descricao: string, professor: string, preco: number, nivel: string, status: string, tags: string[], criadoEm: Date, atualizadoEm: Date, ativo: boolean) {
        this._id = _id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.professor = professor;
        this.preco = preco;
        this.nivel = nivel;
        this.status = status;
        this.tags = tags;
        this.criadoEm = criadoEm;
        this.atualizadoEm = atualizadoEm;
        this.ativo = ativo;
        this.aulas = [];
        this.alunos = [];
    }

    public get id(): string {
        return this._id;
    }
}

export default Curso;