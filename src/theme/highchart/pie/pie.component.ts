import {Component, Input, OnInit} from '@angular/core';
import * as theme from '../chart.theme';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() title: string = '';
  @Input() Ydata: Array<{name:string,data:Array<any>}> = null;
  constructor() {
  }

  ngOnInit() {
    this.initPieChart();
  }

  initPieChart() {
    let options = {
      //图表所有类型在plotOptions下显示有
      title: {
        text: this.title
      },
      chart: {type: 'pie'},
      series: this.Ydata,
    };
    options.series[0].data[0].sliced=true;
    options.series[0].data[0].selected=true;
    let mytheme = theme.getPublicChartTheme();
    Highcharts.setOptions(mytheme);
    Highcharts.chart('piechartContainer', options)
  }
}
