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
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { AnimationComponent } from './animation/animation.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommonComponent } from './common/common.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../shared/http/in-memory-data.service";
import { HttpComponent } from './http/http.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    routing
  ],
  providers:[],
  entryComponents:[ModalComponent],
  declarations: [PagesComponent, SidebarComponent, LoadingComponent,
    NgBootstrapComponent, ModalComponent, SweetAlertComponent, AnimationComponent, CommonComponent, HttpComponent]
})
export class PagesModule { }
