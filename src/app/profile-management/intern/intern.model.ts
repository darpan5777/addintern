export class Intern {
  public  id!:number;
  public  firstName!:String;
  public  middleName!:String;
  public  lastName!:String;
  public  contactNo!:String;
  public  email!:string;
   public password!:string;
   public confirmPassword!:string;
  public  domain!:string;
  public  subDomain!:string;
  public selectMentors!:string;
public from!:string;
public to!:string;

  constructor ( 
         id:number,
         firstName:String,
         middleName:String,
         lastName:String,
         contactNo:String,
         email:string,
         password:string,
         confirmPassword:string, 
         from:string,
         to:string,
         domain:string,
         subDomain:string,
         selectMentors:string,
     
  ){    
       this.id =id,
       this.firstName = firstName,
       this.middleName = middleName,
       this.lastName = lastName,
       this.contactNo = contactNo,
       this.email = email,
        this.password = password,
       this.confirmPassword = confirmPassword,
       this.from=from,
       this.to=to,
       this.domain=domain,
       this.subDomain=subDomain,
       this.selectMentors=selectMentors
       
  }
}

