export class Signup {
    id: number;
    name:string;
    email:string;
    phone:number;
    password: string;
    constructor(id:number, name:string, email:string , phone:number, password :string)
    {
        this.id= id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.password=password;
    
    }
}
