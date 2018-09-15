import {NgModule} from '@angular/core';
import {TabsComponent} from "./Tabs.component";
import {Tabs1Component} from "./tab1/Tabs1.component";
import {routing} from "./Tabs.routing";
import {CommonModule} from "@angular/common";
import {DropPreviewComponent} from "./drop-preview/drop-preview.component";
import {DropPreview1Component} from "./drop-preview1/drop-preview1.component";

const Components=[
  TabsComponent,
  Tabs1Component,
  DropPreviewComponent,
  DropPreview1Component
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
