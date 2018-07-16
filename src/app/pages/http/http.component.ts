import { Component, OnInit } from '@angular/core';
import {Hero, Service} from "./service";
import {Observable} from "rxjs/Observable";
import {AnywereService} from "../anywere.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
  providers:[Service]
})
export class HttpComponent implements OnInit {
  HeroData:Observable<any>;
  hero:Observable<Hero[]>;
  ayncData:any={};
  valueIndex=0;

  public options = {
    spinable: true,
    buttonWidth: 40,
  };

  public wings = [
    {
      'title': 'iPad',
      'color': '#ea2a29',
      'icon': {'name': 'fa fa-tablet'}
    }, {
      'title': 'iMac',
      'color': '#f16729',
      'icon': {'name': 'fa fa-laptop'}
    }, {
      'title': 'iPhone',
      'color': '#f89322',
      'icon': {'name': 'fa fa-mobile'}
    }, {
      'title': 'iWatch',
      'color': '#ffcf14',
      'icon': {'name': 'fa fa-clock-o'}
    }
  ];

  public gutter = {
    bottom: 30,
    left: 30
  };

  public startAngles = {
    topLeft: -20,
  }
  constructor(private dataService:Service) {
    this.HeroData=this.dataService.getHeroes();
    this.hero=this.dataService.getHeroById(11);
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
