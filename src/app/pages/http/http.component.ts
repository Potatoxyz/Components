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
  constructor(private dataService:Service) {
    this.HeroData=this.dataService.getHeroes();
  }

  ngOnInit() {
    // this.loadData();
  }
  // loadData(){
  //   this.dataService.getHeroes().subscribe(data=>{
  //     console.log(data);
  //     this.HeroData=data;
  //   })
  // }
}
