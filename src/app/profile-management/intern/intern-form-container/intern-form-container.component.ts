import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InternService } from 'src/app/shared/service/intern.service';

@Component({
  selector: 'app-intern-form-container',
  templateUrl: './intern-form-container.component.html',
  styleUrls: ['./intern-form-container.component.scss']
})
export class InternFormContainerComponent implements OnInit {

  constructor( public InternService:InternService) { }

  ngOnInit(): void {  }
    public onaddinter(AccountForm: FormGroup) {
    
      this.InternService.Addintern(AccountForm);
    }}
