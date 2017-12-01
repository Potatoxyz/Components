import { Component, OnInit } from '@angular/core';
import {Service} from "./service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
  providers:[Service]
})
export class HttpComponent implements OnInit {
  HeroData:Observable<any>;
  ayncData:any={};
  valueIndex=0;
  constructor(private dataService:Service) {
    this.HeroData=this.dataService.getHeroes();
  }

  ngOnInit() {
    this.getAnycData();
  }
  //获取异步的值
  //方法一：使用*ngIf,判断当异步有值时才调用这个组件，缺点是不能一直监听改变
  //方法二：利用Rxjx的BehaviorSubject来监听Input值的变化
  getAnycData(){
    this.HeroData.subscribe(data=>{
      this.ayncData=data[this.valueIndex];
    })
  }
  changeValue(){
    this.valueIndex++;
    this.getAnycData();
  }
}
