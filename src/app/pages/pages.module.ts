import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesComponent} from "./pages.component";
import {routing} from "./pages.routing";
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import { LoadingComponent } from './loading/loading.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing
  ],
  declarations: [PagesComponent, SidebarComponent, LoadingComponent]
})
export class PagesModule { }
