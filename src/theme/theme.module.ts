import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationComponent} from "./components/ngx-pagination/ngx-pagination.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {QuickLinkComponent} from "./components/quick-link/quick-link.component";
import {RouterModule} from "@angular/router";
import {CommonHeadComponent} from "./components/common-head/common-head.component";

const components=[
  NgxPaginationComponent,
  QuickLinkComponent,
  CommonHeadComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  declarations: [
    ...components
  ],
  exports:[
    ...components
  ]

})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
