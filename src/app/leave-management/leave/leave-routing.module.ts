/**
 * @author: Bhavik
 * @description: 
 */import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveFormContainerComponent } from './leave-form-container/leave-form-container.component';
import { LeaveListContainerComponent } from './leave-list-container/leave-list-container.component';
import { ViewRevokingRequestPresentationComponent } from './leave-list-container/view-revoking-request-presentation/view-revoking-request-presentation.component';
import { LeaveComponent } from './leave.component';

const routes: Routes = [{ path: '', component: LeaveComponent,
                         children:[
                         {
                           path:'',
                           component:LeaveListContainerComponent
                         },
                         {
                           path:'add',
                           component:LeaveFormContainerComponent
                         },
                         {
                           path:'revoking',
                           component:ViewRevokingRequestPresentationComponent
                         }
                       ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
