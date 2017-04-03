export class notes {
  
    Name:string;
    Detail:string;
  
    constructor(Notes: any={}) {
      
        this.Detail = Notes.Detail;
        this.Name = Notes.Name;
    }
}
export class type {
    name:string;  
    constructor(Type: type) {
        this.name = Type.name;
     
    }
}