import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {ModuleWithProviders} from "@angular/core";
import {LoadingComponent} from "./loading/loading.component";

export const routes:Routes=[
  {
    path:'page',component:PagesComponent,
    children:[
      {path:'loading',component:LoadingComponent},
      {path:'ngbootstrap',loadChildren:'./ng-bootstrap/ng-bootstrap.module#NgBootstrapModule'}
    ]
  }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
