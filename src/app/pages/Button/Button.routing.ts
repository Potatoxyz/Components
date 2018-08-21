import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ButtonComponent} from "./Button.component";

export const buttonRouting:Routes=[
  {
    path:'',
    component:ButtonComponent
  }
];
export const ButtonRouting:ModuleWithProviders=RouterModule.forChild(buttonRouting);
