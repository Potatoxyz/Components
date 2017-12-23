import { Component, OnInit } from '@angular/core';
import * as theme from '../chart.theme';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-spline',
  templateUrl: './spline.component.html',
  styleUrls: ['./spline.component.scss']
})
export class SplineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initSpLineChart();
  }

  initSpLineChart(){
    var options={
      chart: {type: 'spline'},
      title: {text: `7天走势`},
      xAxis: {type:'datetime', xDateFormat: '%m-%d', categories:[]},
      yAxis: {
        title: {text: 'money'},
        labels: {formatter: function () {return this.value + ' ' +'$';}}
      },

      //代表线数据
      series: [
        {name: '金额', data:[], color:'#91167a'},
        {name: '数量', data:[], color:'#ffbb34'},
        ]
    };
    options.series[0].data=[20,11,15,8,28,14];
    options.series[1].data=[14,11,8,28,20,15];
    options.xAxis.categories=['2017/12/22','2017/12/23','2017/12/24','2017/12/25','2017/12/26','2017/12/27'];
    let mytheme=theme.getPublicChartTheme();
    Highcharts.setOptions(mytheme);
    Highcharts.chart('splinechartContainer',options);
  }

}
