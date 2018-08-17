import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationComponent} from "./components/ngx-pagination/ngx-pagination.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {QuickLinkComponent} from "./components/quick-link/quick-link.component";
import {RouterModule} from "@angular/router";
import {CommonHeadComponent} from "./components/common-head/common-head.component";
import {CkEditorComponent} from "./components/ck-editor/ck-editor.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {SideBarComponent} from "./components/sideBar/sideBar.component";
import {SideBarItemComponent} from "./components/sideBar/sideBarItem/sideBarItem.component";

const components=[
  NgxPaginationComponent,
  QuickLinkComponent,
  CommonHeadComponent,
  CkEditorComponent,
  LoadingComponent,
  SideBarComponent,
  SideBarItemComponent
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
