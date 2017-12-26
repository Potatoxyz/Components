import {Component, Input, OnInit} from '@angular/core';
import * as theme from '../chart.theme';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle?: string = '';
  @Input() Ytitle: string = '';
  @Input() autogrownumber?: boolean = false;
  @Input() autogrowDate?: boolean = false;
  @Input() growStartnum?: number = 0;
  @Input() growStartdate?: number = 0;
  @Input() Ydata: Array<{name:string,list:Array<number>}> = null;

  constructor() {
  }

  ngOnInit() {
    this.initLineChart();
  }

  initLineChart() {
    let options = {
      //图表所有类型在plotOptions下显示有
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subtitle
      },
      chart: {type: 'line'},//默认也是line
      yAxis: {
        title: {
          text: this.Ytitle
        }
      },
      //X轴数据列如果没有指定的通用默认设置
      plotOptions: {
        //X轴去点数据，适合增长的单一数字
        series: {}
      },
      series: this.Ydata,
    };
    if (this.autogrownumber) {
      options.plotOptions.series = {pointStart: this.growStartnum};
    }
    if(this.autogrowDate){
      options.plotOptions.series =
        {
          pointStart: Date.UTC(2010, 0, 1), //开始日期
          pointInterval: 24 * 3600 * 1000    //间隔天数
        }
    }
    let mytheme = theme.getPublicChartTheme();
    Highcharts.setOptions(mytheme);
    Highcharts.chart('linechartContainer', options)
  }
}
