import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {ModuleWithProviders} from "@angular/core";
import {LoadingComponent} from "./loading/loading.component";
import {NgBootstrapComponent} from "./ng-bootstrap/ng-bootstrap.component";

export const routes:Routes=[
  {
    path:'page',component:PagesComponent,
    children:[
      {path:'loading',component:LoadingComponent},
      {path:'ngbootstrap',component:NgBootstrapComponent},
    ]
  }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
