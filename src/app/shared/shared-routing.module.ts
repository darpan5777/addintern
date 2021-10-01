import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewInternProfilePresentationComponent } from './component/view-intern-profile-presentation/view-intern-profile-presentation.component';
import { ViewLeaveProfileApplicationPresentationComponent } from './component/view-leave-profile-application-presentation/view-leave-profile-application-presentation.component';
import { ViewMentorProfilePresentationComponent } from './component/view-mentor-profile-presentation/view-mentor-profile-presentation.component';
import { SharedComponent } from './shared.component';

const routes: Routes = [{ path: '', component: SharedComponent,
                       children:[
                         {
                           path:'internprofile/:id',
                           component:ViewInternProfilePresentationComponent
                         },
                         {
                           path:'leaveprofile/:id',
                           component:ViewLeaveProfileApplicationPresentationComponent
                         },
                         {
                           path:'mentorprofile/:id',
                           component:ViewMentorProfilePresentationComponent
                         }
                       ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
