import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Public_api} from "../../shared/http/public_api";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AnywereService} from "./anywere.service";
import {CUSTOM_MENU} from "./custom.menu";
declare let $:any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit,AfterViewInit {
 time:any=0;
 process:number=0;
 end:number=0;
 CUSTOM_MENU;
 ActiveLinks=[];
  constructor(private route:Router,
              private api:Public_api,
              private anywereService:AnywereService,
              private elementRef:ElementRef) {
    this.time=this.api._time;
    this.CUSTOM_MENU=CUSTOM_MENU;
  }
  ngOnInit() {
    this.time.subscribe(time=>{
      // console.log('pageGetTime:  '+time.time+' '+time.timeKind);
      switch (time.timeKind){
        case 'start':
          this.process=0;
          this.end=time.time;
          $('#processBar').css('display','block');
          break;
        case 'end':
          setTimeout(()=>{ this.process=time.time;},200);
          setTimeout(()=>{$('#processBar').css('display','none');},1000);
      }
    });

    this.anywereService.getCollapse().subscribe(mes=>{
      if(mes){
        $('.sidebar').css('width','0');
        $('.content').css({'paddingLeft':'115px'});
      }
      else{
        $('.sidebar').css('width','200px');
        $('.content').css({'paddingLeft':'215px'});
      }
    })
  }
  ngAfterViewInit(){
    //使用第二个sideBar时，调整页面容器的边距
    let containerDom=this.elementRef.nativeElement.querySelectorAll('div#content');
    console.log(containerDom);
    $(containerDom).css({'padding':'75px 5% 0'});
  }
}
