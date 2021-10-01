import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternRoutingModule } from './intern-routing.module';
import { InternComponent } from './intern.component';
import { InternListContainerComponent } from './intern-list-container/intern-list-container.component';
import { InternListPresentationComponent } from './intern-list-container/intern-list-presentation/intern-list-presentation.component';
import { InternFormContainerComponent } from './intern-form-container/intern-form-container.component';
import { InternFormPresentationComponent } from './intern-form-container/intern-form-presentation/intern-form-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternService } from 'src/app/shared/service/intern.service';

import { InternListPresenterService } from './intern-list-container/intern-list-presenter/intern-list-presenter.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InternComponent,
    InternListContainerComponent,
    InternListPresentationComponent,
    InternFormContainerComponent,
    InternFormPresentationComponent
    
  ],
  imports: [
    CommonModule,
    InternRoutingModule,
   ReactiveFormsModule,
   FormsModule,
   HttpClientModule
  
  ],
  providers:[InternService]
})
export class InternModule { }
