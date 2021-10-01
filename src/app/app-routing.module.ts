import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'mentor', pathMatch: 'full' },

  
  {
    path: 'mentor',
    loadChildren: () =>
      import('./profile-management/mentor/mentor.module').then(
        (m) => m.MentorModule
      ),
  },
  {
    path: 'intern',
    loadChildren: () =>
      import('./profile-management/intern/intern.module').then(
        (m) => m.InternModule
      ),
  },
  {
    path: 'leave',
    loadChildren: () =>
      import('./leave-management/leave/leave.module').then(
        (m) => m.LeaveModule
      ),
  },
  {
    path: 'leave-request',
    loadChildren: () =>
      import('./leave-management/leave-request/leave-request.module').then(
        (m) => m.LeaveRequestModule
      ),
  },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
