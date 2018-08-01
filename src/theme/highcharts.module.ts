import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PieComponent} from "./highchart/pie/pie.component";
import {SplineComponent} from "./highchart/spline/spline.component";
import {LinechartComponent} from "./highchart/linechart/linechart.component";
import {ColumnchartComponent} from "./highchart/columnchart/columnchart.component";

const components=[
  SplineComponent,
  PieComponent,
  LinechartComponent,
  ColumnchartComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ...components
  ],
  exports:[
    ...components
  ]

})
export class HighchartsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: HighchartsModule,
      providers: [],
    };
  }
}
