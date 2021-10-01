/**
 * @author: Bhavik
 * @description: 
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestListContainerComponent } from './leave-request-list-container/leave-request-list-container.component';
import { ViewLeaveApplicationPresentationComponent } from './leave-request-list-container/view-leave-application-presentation/view-leave-application-presentation.component';
import { LeaveRequestComponent } from './leave-request.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveRequestComponent,
    children: [
      {
        path: '',
        component: LeaveRequestListContainerComponent,
      },
      {
        path: 'leave-status/:id',
        component: ViewLeaveApplicationPresentationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRequestRoutingModule {}
