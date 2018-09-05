import {NgModule} from '@angular/core';
import {TabsComponent} from "./Tabs.component";
import {Tabs1Component} from "./tab1/Tabs1.component";
import {routing} from "./Tabs.routing";
import {CommonModule} from "@angular/common";

const Components=[
  TabsComponent,
  Tabs1Component
];
@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  exports: [],
  entryComponents:[],
  declarations: [...Components],
  providers: [],
})
export class TabsModule {
}
