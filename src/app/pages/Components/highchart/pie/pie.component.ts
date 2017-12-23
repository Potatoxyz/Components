import { Component, OnInit } from '@angular/core';
import * as theme from '../chart.theme';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initPieChart();
  }
  initPieChart(){
    let options={
      //图表所有类型在plotOptions下显示有
      title: {
        text: '2014年某网站各浏览器的访问量占比'
      },
      chart: {type: 'pie'},
      series: [
        {type: 'pie',
      name: '浏览器占比',
      data: [
      ['Firefox',   45.0],
      ['IE',       26.8],
      {
        name: 'Chrome',
        y: 12.8,
        sliced: true,
        selected: true
      },
      ['Safari',    8.5],
      ['Opera',     6.2],
      ['其他',   0.7]
    ]
  }
      ],
    };
    let mytheme=theme.getPublicChartTheme();
    Highcharts.setOptions(mytheme);
    Highcharts.chart('piechartContainer',options)
  }
}
