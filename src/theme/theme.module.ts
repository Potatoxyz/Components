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
import {SaleCalendarComponent} from "./components/sale-calendar/sale-calendar.component";
import {PipesModule} from "../shared/pipe/pipes.module";
import {LevelSelectComponent} from "./components/level-select/level-select.component";
import {LevelPartComponent} from "./components/level-select/level-part/level-part.component";
import {ModalWrapComponent} from "./components/modal-wrap/modal-wrap.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
const ModalComponents=[
  ModalWrapComponent,
  LevelSelectComponent,
];
const components=[
  ...ModalComponents,
  NgxPaginationComponent,
  QuickLinkComponent,
  CommonHeadComponent,
  CkEditorComponent,
  LoadingComponent,
  SideBarComponent,
  SideBarItemComponent,
  SaleCalendarComponent,
  LevelPartComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule,
    PipesModule
  ],
  declarations: [
    ...components,
  ],
  exports:[
    ...components,
  ],
  entryComponents:[...ModalComponents]

})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
