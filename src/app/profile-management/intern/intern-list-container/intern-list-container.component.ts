import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { InternService } from 'src/app/shared/service/intern.service';
import { Intern } from '../intern.model';

@Component({
  selector: 'app-intern-list-container',
  templateUrl: './intern-list-container.component.html',
  styleUrls: ['./intern-list-container.component.scss']
  
})
export class InternListContainerComponent implements OnInit {

   public internList$:  Observable<any> = of();

  constructor(private InternService:InternService) {
    this.internList$ = this.InternService.Internlist();
    console.log(this.internList$)
   }

  ngOnInit(): void {
  }

}
