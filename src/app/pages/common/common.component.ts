import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";
import {Hero} from "../http/service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CommonComponent implements OnInit {
  private _ayncData=new BehaviorSubject<Hero>(new Hero());
  @Input() set ayncData(ayncData){
      this._ayncData.next(ayncData);
    };
    get ayncData(){
      return this._ayncData.getValue();
    }


  DatePipe=new Date();
  CurrencyPipe:number=1.26;  // 默认使用USD，保留小数点后两位
  decimalPipe:number=1.926; //  整数位数(默认1) . 最小分数位数(默认0) - 最大分数位数(默认3) 1.0-3
  percentPipe:number=1.926; //  和numberPipe类似，把小数转换为百分数
  slicePipe=['a','b','c','d','e'];  //参数start必须,end默认到最后。[start,end)。start可负，-1表示最后一个
  titlePipe='haha heihei';      //首字母大写而已
  constructor() { }
  ngOnInit() {
    this.getAyncData();
  }
  getAyncData(){
    this._ayncData.subscribe(data=>{
      // console.log(data);  //会输出两次，一次是初始化的时候未获取值，输出空；值发生改变时又会输出一次
    })
  }
}
