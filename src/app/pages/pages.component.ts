import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Public_api} from "../../shared/http/public_api";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
declare let $:any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
 time:any=0;
 process:number=0;
 end:number=0;
  constructor(private route:Router,
              private api:Public_api) {
    this.time=this.api._time;
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
  }
}
