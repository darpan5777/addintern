import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InternFormPresenterService } from '../intern-form-presenter/intern-form-presenter.service';

@Component({
  selector: 'app-intern-form-presentation',
  templateUrl: './intern-form-presentation.component.html',
  styleUrls: ['./intern-form-presentation.component.scss']
})
export class InternFormPresentationComponent implements OnInit {

  public internForm: FormGroup;
public submitted!:false;

  @Output() addaccount: EventEmitter<any> = new EventEmitter();
 
  constructor(private InternFormPresenterService: InternFormPresenterService) {
    this.internForm = this.InternFormPresenterService.BindForm();
  }

  
  ngOnInit(): void { this.InternFormPresenterService.internData$.subscribe(
        (addintern) => this.addaccount.emit(addintern)
      );
  }
 
  get AccountFormControl() {
    return this.internForm.controls;
  }
      
  get f() { return this.internForm.controls; }

  public Submit() {
    
   return this.InternFormPresenterService.internDetails(this.internForm)
   
  

  
    if (this.internForm.invalid) {
        return;
    }
  }
}
