import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const routes:Routes=[
  {path:'',redirectTo:'page',pathMatch:'full'},
  {path:'**',redirectTo:'page'},
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
