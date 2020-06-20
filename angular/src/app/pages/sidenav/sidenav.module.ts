import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';



@NgModule({
  imports: [
    CommonModule,
    SidenavRoutingModule
  ],
  declarations: [SidenavComponent]
})
export class SidenavModule { }
