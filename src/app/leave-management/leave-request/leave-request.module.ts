import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRequestRoutingModule } from './leave-request-routing.module';
import { LeaveRequestComponent } from './leave-request.component';
import { LeaveRequestListContainerComponent } from './leave-request-list-container/leave-request-list-container.component';
import { LeaveRequestListPresentationComponent } from './leave-request-list-container/leave-request-list-presentation/leave-request-list-presentation.component';
import { ViewLeaveApplicationPresentationComponent } from './leave-request-list-container/view-leave-application-presentation/view-leave-application-presentation.component';


@NgModule({
  declarations: [
    LeaveRequestComponent,
    LeaveRequestListContainerComponent,
    LeaveRequestListPresentationComponent,
    ViewLeaveApplicationPresentationComponent
  ],
  imports: [
    CommonModule,
    LeaveRequestRoutingModule
  ]
})
export class LeaveRequestModule { }
