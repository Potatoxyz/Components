import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const routes:Routes=[
  {path:'',redirectTo:'/page/ngbootstrap',pathMatch:'full'},
  {path:'**',redirectTo:'/page/ngbootstrap'},
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes,{useHash:true});
