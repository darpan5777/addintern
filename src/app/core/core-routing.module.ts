/**
 * @author: Bhavik
 * @description: 
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MasterComponent } from './component/master/master.component';
import { CoreComponent } from './core.component';

const routes: Routes = [{ path: '', component: CoreComponent ,
                      children:[
                        {
                          path:'home',
                          component:HomeComponent
                        },
                        {
                          path:'',
                          component:MasterComponent
                        }
                      ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
