import {NgModule} from '@angular/core';
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
  TableComponent,
  CommonTableComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
