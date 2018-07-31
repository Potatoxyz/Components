import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationComponent} from "./components/ngx-pagination/ngx-pagination.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";

const components=[
  NgxPaginationComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
