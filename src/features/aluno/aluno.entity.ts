class Aluno {
    /*
    {
  "_id": ObjectId("64a1f2b3c4d5e6f7a8b9c0d3"),
  "nome": "Ana Paula Silva",
  "email": "ana@email.com",
  "senhaHash": "$2b$10$xyzABC...",
  "avatarUrl": "https://cdn.cursos.com/avatars/ana.jpg",
  "interesses": ["javascript", "react", "backend"],
  "criadoEm": ISODate("2024-02-15T08:45:00Z"),
  "ultimoAcesso": ISODate("2024-06-10T19:20:00Z")
}
    */
    private _id: string;
    private nome: string
    private email: string;
    private senhaHash: string;
    private avatarUrl: string;
    private interesses: string[];
    private criadoEm: Date;
    private ultimoAcesso: Date;
    private ativo: boolean;

    constructor(_id: string, nome: string, email: string, senhaHash: string, avatarUrl: string, interesses: string[], criadoEm: Date, ultimoAcesso: Date) {
        this._id = _id;
        this.nome = nome;
        this.email = email;
        this.senhaHash = senhaHash;
        this.avatarUrl = avatarUrl;
        this.interesses = interesses;
        this.criadoEm = criadoEm;
        this.ultimoAcesso = ultimoAcesso;
        this.ativo = true;
    }

    public get id(): string {
        return this._id;
    }

}

export default Aluno;