import {Component, Input, OnInit} from '@angular/core';
import * as theme from '../chart.theme';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  @Input() title:string='';
  constructor() { }

  ngOnInit() {
    this.initLineChart();
  }

  initLineChart(){
    let options={
      //图表所有类型在plotOptions下显示有
      title: {
        text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
      },
      subtitle: {
        text: '数据来源：thesolarfoundation.com'
      },
      chart: {type: 'line'},//默认也是line
      //图利
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
        yAxis: {
          title: {
            text: '就业人数'
          }
        },
      //X轴数据列如果没有指定的通用默认设置
      plotOptions: {
        //X轴去点数据，适合增长的单一数字
        series: {pointStart: 2010}
      },
      series: [{
        name: '安装，实施人员',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: '工人',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: '销售',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: '项目开发',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: '其他',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],
    };
    let mytheme=theme.getPublicChartTheme();
    Highcharts.setOptions(mytheme);
    Highcharts.chart('linechartContainer',options)
  }
}
