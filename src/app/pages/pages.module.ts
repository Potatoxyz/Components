import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesComponent} from "./pages.component";
import {routing} from "./pages.routing";
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import { LoadingComponent } from './loading/loading.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NgBootstrapComponent } from './ng-bootstrap/ng-bootstrap.component';
import { ModalComponent } from './ng-bootstrap/modal/modal.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    routing
  ],
  providers:[],
  entryComponents:[ModalComponent],
  declarations: [PagesComponent, SidebarComponent, LoadingComponent, NgBootstrapComponent, ModalComponent]
})
export class PagesModule { }
