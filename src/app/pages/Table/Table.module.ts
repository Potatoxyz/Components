import {NgModule} from '@angular/core';
import {DataTableComponent} from "./component/data-table/data-table.component";
import {CuppaDataGridModule} from "../../../shared/modules/cuppa-ng2-grid/src/app/angular2-dataGrid/angular2-dataGrid";
import {ThemeModule} from "../../../theme/theme.module";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TableRouting} from "./Table.routing";
import {TableComponent} from "./Table.component";
import {NgxPaginationModule} from "ngx-pagination";
import {CommonTableComponent} from "./component/commonTable/commonTable.component";
import {PipesModule} from "../../../shared/pipe/pipes.module";

export const Components=[
  DataTableComponent,
  TableComponent,
  CommonTableComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CuppaDataGridModule,
    ThemeModule,
    NgbPaginationModule,
    NgxPaginationModule,
    PipesModule,
    TableRouting
  ],
  exports: [],
  declarations: [...Components],
  providers: [],
})
export class TableModule {
}
