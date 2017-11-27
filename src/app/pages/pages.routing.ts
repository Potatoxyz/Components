import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {ModuleWithProviders} from "@angular/core";
import {LoadingComponent} from "./loading/loading.component";
import {NgBootstrapComponent} from "./ng-bootstrap/ng-bootstrap.component";
import {SweetAlertComponent} from "./sweet-alert/sweet-alert.component";
import {AnimationComponent} from "./animation/animation.component";

export const routes:Routes=[
  {
    path:'page',component:PagesComponent,
    children:[
      {path:'loading',component:LoadingComponent},
      {path:'ngbootstrap',component:NgBootstrapComponent},
      {path:'sweetalert',component:SweetAlertComponent},
      {path:'animation',component:AnimationComponent},
    ]
  }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
