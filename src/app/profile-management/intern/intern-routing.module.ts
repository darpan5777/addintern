/**
 * @author: Ankit
 * @description: Intern Routing file  integration
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternFormContainerComponent } from './intern-form-container/intern-form-container.component';
import { InternListContainerComponent } from './intern-list-container/intern-list-container.component';
import { InternComponent } from './intern.component';

const routes: Routes = [{ path: '', component: InternComponent ,
                        children:[
                          {
                            path:'',
                            component:InternListContainerComponent
                          },
                          {
                            path:'add',
                            component:InternFormContainerComponent
                          },
                          {
                            path:'edit/:id',
                            component:InternFormContainerComponent
                          }
                        ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule { }
