class Matricula {
    /*
    {
  "_id": ObjectId("64a1f2b3c4d5e6f7a8b9c0d4"),
  "alunoId": ObjectId("64a1f2b3c4d5e6f7a8b9c0d3"),
  "cursoId": ObjectId("64a1f2b3c4d5e6f7a8b9c0d1"),
  "matriculadoEm": ISODate("2024-03-01T12:00:00Z"),
  "progressoPct": 65.5,
  "status": "em_andamento",
  "concluidoEm": null,
  "aulasAssistidas": [
    ObjectId("64a1f2b3c4d5e6f7a8b9c0d2"),
    ObjectId("64a1f2b3c4d5e6f7a8b9c0d5")
  ]
}
    */
    private _id: string;
    private alunoId: string
    private cursoId: string;
    private matriculadoEm: Date;
    private progressoPct: number;
    private status: string;
    private concluidoEm: Date | null;
    private aulasAssistidas: string[];
    private ativo: boolean;
    constructor(_id: string, alunoId: string, cursoId: string, matriculadoEm: Date, progressoPct: number, status: string, concluidoEm: Date | null, aulasAssistidas: string[]) {
        this._id = _id;
        this.alunoId = alunoId;
        this.cursoId = cursoId;
        this.matriculadoEm = matriculadoEm;
        this.progressoPct = progressoPct;
        this.status = status;
        this.concluidoEm = concluidoEm;
        this.aulasAssistidas = aulasAssistidas;
        this.ativo = true;
    }

    public get id(): string {
        return this._id;
    }

}

export default Matricula;