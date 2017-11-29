import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";

@Component({
  selector: 'app-loading',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CommonComponent implements OnInit {
  DatePipe=new Date();
  CurrencyPipe:number=1.26;  // 默认使用USD，保留小数点后两位
  decimalPipe:number=1.926; //  整数位数(默认1) . 最小分数位数(默认0) - 最大分数位数(默认3) 1.0-3
  percentPipe:number=1.926; //  和numberPipe类似，把小数转换为百分数
  slicePipe=['a','b','c','d','e'];  //参数start必须,end默认到最后。[start,end)。start可负，-1表示最后一个
  titlePipe='haha heihei';      //首字母大写而已
  constructor() { }
  ngOnInit() {
  }

}
