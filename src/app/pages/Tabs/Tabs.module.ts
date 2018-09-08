import {NgModule} from '@angular/core';
import {TabsComponent} from "./Tabs.component";
import {Tabs1Component} from "./tab1/Tabs1.component";
import {routing} from "./Tabs.routing";
import {CommonModule} from "@angular/common";
import {DropPreviewComponent} from "./drop-preview/drop-preview.component";

const Components=[
  TabsComponent,
  Tabs1Component,
  DropPreviewComponent
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
