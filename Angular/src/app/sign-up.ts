export class Signup {
    id: number;
    name:string;
    email:string;
    mobile:number;
    password: string;
    constructor(id:number, name:string, email:string , mobile:number, password :string)
    {
        this.id= id;
        this.name=name;
        this.email=email;
        this.mobile=mobile;
        this.password=password;
    
    }
}
