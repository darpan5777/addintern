import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MasterComponent } from './component/master/master.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    CoreComponent,
    MasterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
