export class todoItem{

    name: string;
    isDone: boolean = false;

    constructor(name: string, isDone: boolean){
        this.name = name;
        this.isDone = isDone;
    }
}