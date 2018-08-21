import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "./Table.component";
import {ModuleWithProviders} from "@angular/core";

export const tableRouting:Routes=[
  {
    path:'',
    component:TableComponent
  }
];
export const TableRouting:ModuleWithProviders=RouterModule.forChild(tableRouting);
