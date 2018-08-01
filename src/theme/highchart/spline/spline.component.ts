import {Component, Input, OnInit} from '@angular/core';
import * as theme from '../chart.theme';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.scss']
})
export class SplineComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle?: string = '';
  @Input() Ytitle: string = '';
  @Input() Yunit?: string = '';
  @Input() autogrownumber?: boolean = false;
  @Input() autogrowDate?: boolean = false;
  @Input() growStartnum?: number = 0;
  @Input() growStartdate?: number = null;
  @Input() Ydata: Array<{name:string,list:Array<number>}> = null;

  constructor() { }

  ngOnInit() {
    this.initSpLineChart();

  }

  initSpLineChart(){
    var options={
      chart: {type: 'spline'},
      title: {text: this.title},
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%Y-%m-%d'
        }
      },
      yAxis: {
        title: {text: this.Ytitle},
        labels: {formatter: function () {return this.value + ' ' +'';}}
      },

      //通用X轴数据
      plotOptions: {
        series: {}
      },

      //代表线数据
      series: this.Ydata
    };
    if (this.autogrownumber) {
      options.plotOptions.series = {pointStart: this.growStartnum};
    }
    if(this.autogrowDate){
      options.plotOptions.series =
        {
          pointStart: this.growStartdate, //开始日期
          pointInterval: 24 * 3600 * 1000    //间隔天数
        }
    }
    if(this.Yunit){
      let util=this.Yunit;
      options.yAxis.labels.formatter=function () {
        return this.value + ' ' +util;
      }
    }
    let mytheme=theme.getPublicChartTheme();
    Highcharts.setOptions(mytheme);
    Highcharts.chart('splinechartContainer',options);
  }

}
