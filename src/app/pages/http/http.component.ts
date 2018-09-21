import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AnywereService} from "../anywere.service";
import {HttpHeroService} from "./http-hero.service";
import {Hero} from "./hero";
import {GenetatorRandom} from "../../../shared/method/genetator.random";
var Mock = require('mockjs');
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
  providers:[HttpHeroService]
})
export class HttpComponent implements OnInit {
  HeroDataOb:Observable<any>;
  heroOb:Observable<Hero>;
  ayncData:any={};
  id=2;

  public options = {
    spinable: true,
    buttonWidth: 40,
  };
  public gutter = {
    bottom: 30,
    left: 30
  };

  public startAngles = {
    topLeft: -20,
  };
  constructor(private httpHeroService:HttpHeroService,) {
    /**
    申明数据流，使用async直接显示
    */
    // this.HeroDataOb=this.dataService.getHeroes();
    this.HeroDataOb=this.httpHeroService.getHeroes();
  }

  ngOnInit() {}
  //获取异步的值
  //方法一：使用*ngIf,判断当异步有值时才调用这个组件，缺点是不能一直监听改变
  //方法二：利用Rxjx的BehaviorSubject来监听Input值的变化
  //根据id发起请求获取值
  getAnycData(id){
    // this.heroOb=this.dataService.getHeroById(id);
    this.heroOb=this.httpHeroService.getHero(id);
  }
  changeValue(){
    this.id++;
    this.getAnycData(this.id);
  }
}
