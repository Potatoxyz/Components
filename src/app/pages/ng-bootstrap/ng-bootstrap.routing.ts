import {RouterModule, Routes} from "@angular/router";
import {NgBootstrapComponent} from "./ng-bootstrap.component";
import {ModuleWithProviders} from "@angular/core";

export const routes:Routes=[
  {path:'',component:NgBootstrapComponent}
];
export const routing:ModuleWithProviders=RouterModule.forChild(routes);
