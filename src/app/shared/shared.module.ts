import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ViewInternProfilePresentationComponent } from './component/view-intern-profile-presentation/view-intern-profile-presentation.component';
import { ViewLeaveProfileApplicationPresentationComponent } from './component/view-leave-profile-application-presentation/view-leave-profile-application-presentation.component';
import { ViewMentorProfilePresentationComponent } from './component/view-mentor-profile-presentation/view-mentor-profile-presentation.component';


@NgModule({
  declarations: [
    SharedComponent,
    ViewInternProfilePresentationComponent,
    ViewLeaveProfileApplicationPresentationComponent,
    ViewMentorProfilePresentationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
