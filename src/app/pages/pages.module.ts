import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from "./pages.component";
import {routing} from "./pages.routing";
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgBootstrapComponent} from './ng-bootstrap/ng-bootstrap.component';
import {ModalComponent} from './ng-bootstrap/modal/modal.component';
import {NgxPaginationModule, PaginatePipe} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SweetAlertComponent} from './sweet-alert/sweet-alert.component';
import {AnimationComponent} from './Components/animation/animation.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonComponent} from './common/common.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../shared/http/in-memory-data.service";
import {HttpComponent} from './http/http.component';
import {Public_api} from "../../shared/http/public_api";
import {MydirectiveModule} from "../../shared/directve/mydirective.module";
import {Select2Module} from "ng2-select2";
import {AnywereService} from "./anywere.service";
import {SortPipe} from "../../shared/pipe/sort.pipe";
import {NgDatepickerModule} from 'ng2-datepicker';
import { HighchartsComponent } from './highcharts/highcharts.component';
import {ChartDataService} from "./highcharts/chartData.service";
import { TopbarComponent } from './topbar/topbar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CuppaDataGridModule } from '../../shared/modules/cuppa-ng2-grid/cuppa-ng2-dataGrid';
import {CustomPageTopComponent} from "./customPageTop/customPageTop.component";
import {SlideMenuModule} from "cuppa-ng2-slidemenu";
import {ImgPreviewModalComponent} from "./Components/img-preview-modal/img-preview-modal.component";
import {LoadingModule} from "ngx-loading";
import {FanMenuModule} from "ng2-fan-menu";
import {ThemeModule} from "../../theme/theme.module";
import {HighchartsModule} from "../../theme/highcharts.module";
import {JsonpModule} from "@angular/http";
import { NgModelTestComponent } from './common/ng-model-test/ng-model-test.component';


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
    NgDatepickerModule,
    SlideMenuModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    MydirectiveModule,
    CuppaDataGridModule,
    LoadingModule,
    FanMenuModule,
    routing
  ],
  providers: [Public_api, AnywereService,ChartDataService],
  entryComponents: [ModalComponent,ImgPreviewModalComponent],
  declarations: [SortPipe, PagesComponent, SidebarComponent,
    NgBootstrapComponent, ModalComponent, SweetAlertComponent,
    AnimationComponent, CommonComponent, HttpComponent,
     HighchartsComponent, TopbarComponent, DataTableComponent,
    CustomPageTopComponent,ImgPreviewModalComponent, NgModelTestComponent]
})
export class PagesModule {
}
