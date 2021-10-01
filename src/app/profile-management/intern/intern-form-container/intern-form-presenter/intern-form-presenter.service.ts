import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Intern } from '../../intern.model';

@Injectable({
  providedIn: 'root'
})
export class InternFormPresenterService {
  
  public internData: Subject<Intern[]> = new Subject();
  public internData$: Observable<Intern[]>;


  constructor() {  
    this.internData$ = this.internData.asObservable(); }



    public BindForm() {
      return new FormGroup({ 
        firstName: new FormControl('',),
        middleName: new FormControl('', ),
        lastName: new FormControl('', ),
        contactNo: new FormControl('', ),
        email: new FormControl('', ),
        password:new FormControl('', ),
        confirmPassword:new FormControl('', ),
        domain: new FormControl('', ),
        subDomain: new FormControl('', ),
      
  
       });
     }


   

     public internDetails(internForm: FormGroup) {
      this.internData.next(internForm.value);
      }
    
}
