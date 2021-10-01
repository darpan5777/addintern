import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { LeaveListContainerComponent } from './leave-list-container/leave-list-container.component';
import { LeaveListPresentationComponent } from './leave-list-container/leave-list-presentation/leave-list-presentation.component';
import { ViewRevokingRequestPresentationComponent } from './leave-list-container/view-revoking-request-presentation/view-revoking-request-presentation.component';
import { LeaveFormContainerComponent } from './leave-form-container/leave-form-container.component';
import { LeaveFormPresentationComponent } from './leave-form-container/leave-form-presentation/leave-form-presentation.component';



@NgModule({
  declarations: [
    LeaveComponent,
    LeaveListContainerComponent,
    LeaveListPresentationComponent,
    ViewRevokingRequestPresentationComponent,
    LeaveFormContainerComponent,
    LeaveFormPresentationComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule
  ]
})
export class LeaveModule { }
