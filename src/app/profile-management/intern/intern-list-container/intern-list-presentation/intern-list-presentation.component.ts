import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Intern } from '../../intern.model';
import { InternListPresenterService } from '../intern-list-presenter/intern-list-presenter.service';

@Component({
  selector: 'app-intern-list-presentation',
  templateUrl: './intern-list-presentation.component.html',
  styleUrls: ['./intern-list-presentation.component.scss'],
  viewProviders: [InternListPresenterService], 
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InternListPresentationComponent implements OnInit {
   
  private _internlist: Intern[] = [];
   


  @Input() public set internList(value: Intern[]) {
    if(value) {
      this._internlist = value
    }
  }

  public get internList(): Intern[] {
    return this._internlist
  }

  
  constructor() { }

  ngOnInit(): void {
  }
}