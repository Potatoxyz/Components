import {Route, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {TabsComponent} from "./Tabs.component";

const routes:Route[]=[
  {
  path:'',
  component:TabsComponent,
  children:[]
  }
];
export const routing:ModuleWithProviders=RouterModule.forChild(routes);
