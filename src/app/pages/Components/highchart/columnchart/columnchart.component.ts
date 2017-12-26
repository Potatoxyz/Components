import {Component, Input, OnInit} from '@angular/core';
import * as theme from '../chart.theme';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.scss']
})
export class ColumnchartComponent implements OnInit {
  @Input() title: string = '';

  @Input() Ytitle: string = '';

  @Input() Ydata: Array<{name:string,list:Array<number>}> = null;
  @Input() Xdata: Array<any> = null;
  constructor() { }

  ngOnInit() {
    this.initColumnarChart();
  }
  initColumnarChart(){
    let mytheme=theme.getPublicChartTheme();
    var options={
      chart: {type: 'column'},
      title: {text: this.title},
      xAxis: {categories:this.Xdata},
      yAxis: {
        title: {text: this.Ytitle},
      },
      series: this.Ydata
    };



    mytheme.chart.height=500;
    mytheme.legend.enabled=true;
    Highcharts.setOptions(mytheme);
    Highcharts.chart('columncontainer',options);
  }
}
