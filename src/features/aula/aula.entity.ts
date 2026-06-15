class Aula{
    /*
    {
  "_id": ObjectId("64a1f2b3c4d5e6f7a8b9c0d2"),
  "cursoId": ObjectId("64a1f2b3c4d5e6f7a8b9c0d1"),
  "titulo": "Introdução ao Express.js",
  "descricao": "Criando o primeiro servidor HTTP com Express.",
  "videoUrl": "https://cdn.cursos.com/videos/aula-01.mp4",
  "duracaoSegundos": 1800,
  "ordem": 1,
  "gratuita": true,
  "criadoEm": ISODate("2024-01-11T10:00:00Z")
    }
    */
    private _id: string;
    private cursoId: string
    private titulo: string;
    private descricao: string;
    private videoUrl: string;
    private duracaoSegundos: number;
    private ordem: number;
    private gratuito: boolean
    private criadoEm: Date;
    private ativo: boolean;
    constructor(_id: string, cursoId: string, titulo: string, descricao: string, videoUrl: string, duracaoSegundos: number, ordem: number, gratuito: boolean, criadoEm: Date) {
        this._id = _id;
        this.cursoId = cursoId;
        this.titulo = titulo;
        this.descricao = descricao;
        this.videoUrl = videoUrl;
        this.duracaoSegundos = duracaoSegundos;
        this.ordem = ordem;
        this.gratuito = gratuito;
        this.criadoEm = criadoEm;
        this.ativo = true;
    }

    public get id(): string {
        return this._id;
    }

}