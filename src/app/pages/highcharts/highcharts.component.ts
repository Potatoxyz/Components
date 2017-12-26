import { Component, OnInit } from '@angular/core';
import {ChartDataService} from "./chartData.service";

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {
  lineCharttitle:string='折线图';
  lineCharsubttitle:string='折线图子标题';
  lineCharYtitle:string='数值';
  lineCharautogrow:boolean=true;
  lineChargrowStart:number=2010;
  lineCharYdata:Array<{name:string,data:Array<number>}>=null;


  splineCharYdata:Array<{name:string,data:Array<number>}>=null;
  splineCharttitle:string='曲线图';
  splineCharYtitle:string='Value';
  splineCharautogrow:boolean=true;
  splineChargrowStart:number=Date.UTC(2017,11,25);
  splineYunit:string='￥';

  pietitle: string = '饼图';
  pieYdata: Array<{name:string,data:Array<any>}> = null;

  columntitle: string = '柱状图';
  columnYtitle: string = 'Value';
  columnYdata: Array<{name:string,data:Array<number>}> = null;
  columnXdata: Array<any> = null;

  constructor(private chartDataService:ChartDataService) {
    this.lineCharYdata=this.chartDataService.lineData;
    this.splineCharYdata=this.chartDataService.splineData;
    this.pieYdata=this.chartDataService.pieData;
    this.columnYdata=this.chartDataService.columnYData;
    this.columnXdata=this.chartDataService.columnXData;
  }

  ngOnInit() {
  }

}
