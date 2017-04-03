export class notes {
  
    Name:string;
    Details:string;
  
    constructor(Notes: notes) {
        this.Name = Notes.Name;
        this.Details = Notes.Details;
    }
}
export class type {
    name:string;  
    constructor(Type: type) {
        this.name = Type.name;
     
    }
}