import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from "./pages.component";
import {routing} from "./pages.routing";
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgBootstrapComponent} from './ng-bootstrap/ng-bootstrap.component';
import {NgxPaginationModule, PaginatePipe} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AnimationComponent} from './common/animation/animation.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonComponent} from './common/common.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule, InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../shared/http/in-memory-data.service";
import {HttpComponent} from './http/http.component';
import {Public_api} from "../../shared/http/public_api";
import {MydirectiveModule} from "../../shared/directve/mydirective.module";
import {Select2Module} from "ng2-select2";
import {AnywereService} from "./anywere.service";
import {NgDatepickerModule} from 'ng2-datepicker';
import { HighchartsComponent } from './highcharts/highcharts.component';
import {ChartDataService} from "./highcharts/chartData.service";
import { TopbarComponent } from './Components/topbar/topbar.component';
import {CustomPageTopComponent} from "./Components/customPageTop/customPageTop.component";
import {ImgPreviewModalComponent} from "./Components/img-preview-modal/img-preview-modal.component";
import {LoadingModule} from "ngx-loading";
import {ThemeModule} from "../../theme/theme.module";
import {HighchartsModule} from "../../theme/highcharts.module";
import {HttpModule, JsonpModule} from "@angular/http";
import { NgModelTestComponent } from './common/ng-model-test/ng-model-test.component';
import {PipesModule} from "../../shared/pipe/pipes.module";
import {SlideMenuModule} from "cuppa-ng2-slidemenu";

const ModalComponent=[
  ImgPreviewModalComponent
];
const Component=[
    ...ModalComponent,
  PagesComponent, SidebarComponent,
  NgBootstrapComponent,
  AnimationComponent, CommonComponent, HttpComponent,
  HighchartsComponent, TopbarComponent,
  CustomPageTopComponent, NgModelTestComponent,
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    HighchartsModule.forRoot(),
    NgxPaginationModule,
    Select2Module,
    JsonpModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgDatepickerModule,
    SlideMenuModule,
    InMemoryWebApiModule.forRoot(
      InMemoryDataService, {delay: 500}
    ),
    MydirectiveModule,
    LoadingModule,
    routing,
    PipesModule
  ],
  providers: [Public_api, AnywereService,ChartDataService],
  entryComponents: [...ModalComponent],
  declarations: [...Component]
})
export class PagesModule {
}
