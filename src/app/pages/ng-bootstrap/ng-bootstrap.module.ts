import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgBootstrapComponent} from "./ng-bootstrap.component";
import {routing} from "./ng-bootstrap.routing";
import { ModalComponent } from './modal/modal.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    routing
  ],
  declarations: [NgBootstrapComponent, ModalComponent],
  entryComponents:[ModalComponent]
})
export class NgBootstrapModule { }
