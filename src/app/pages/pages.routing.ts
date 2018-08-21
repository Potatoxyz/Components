import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {ModuleWithProviders} from "@angular/core";
import {NgBootstrapComponent} from "./ng-bootstrap/ng-bootstrap.component";
import {SweetAlertComponent} from "./Button/sweet-alert/sweet-alert.component";
import {AnimationComponent} from "./Components/animation/animation.component";
import {CommonComponent} from "./common/common.component";
import {HttpComponent} from "./http/http.component";
import {HighchartsComponent} from "./highcharts/highcharts.component";

export const routes:Routes=[
  {
    path:'page',component:PagesComponent,
    children:[
      {path:'',component:NgBootstrapComponent},
      {path:'ngbootstrap',component:NgBootstrapComponent},
      {path:'animation',component:AnimationComponent},
      {path:'common',component:CommonComponent},
      {path:'http',component:HttpComponent},
      {path:'hightcharts',component:HighchartsComponent},
      {path:'Table',loadChildren:'./Table/Table.module.ts#TableModule'},
      {path:'Button',loadChildren:'./Button/Button.module.ts#ButtonModule'},
    ]
  }
];
export const routing:ModuleWithProviders=RouterModule.forChild(routes);
