import { Injectable } from '@angular/core';
import { Intern } from 'src/app/profile-management/intern/intern.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup } from '@angular/forms';
@Injectable()
export class InternService {
  interndetails:Intern[]=[];



  Url: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }



  public Addintern(internForm: FormGroup) {
   return this.http.post( "http://localhost:3000/intern", internForm).subscribe(
     );
    }


  public  Internlist():Observable<Intern[]>{

      return this.http.get<Intern[]>(" http://localhost:3000/intern");
  }
}