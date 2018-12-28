export class ToDO{
    name: string;
    category: string;
    status: boolean;

    constructor(name:string, category:string, status:boolean){
        this.name=name;
        this.category=category;
        this.status=status;
    }
}