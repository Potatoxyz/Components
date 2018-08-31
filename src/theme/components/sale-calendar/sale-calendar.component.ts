import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sale-calendar',
  templateUrl: './sale-calendar.html',
  styleUrls: ['./sale-calendar.scss'],
  providers:[]
})
export class SaleCalendarComponent implements OnInit{
  @Input() calculateStorges:salesCalendarDataModel[]=[];
  @Input() position:string='top';
  Groups:GroupModel[]=[];
  groupNum:number=3;
  date:Date;
  constructor() {}
  ngOnInit(){
    this.generateGroup(this.groupNum);
    this.getCalendarMonth();
  }
  getCalendarMonth(){
    if(this.calculateStorges.length>0){
      this.date=new Date(this.calculateStorges[5].date);
    }
  }
  generateGroup(groupNum:number){
    let groupPartTotal:number=Math.ceil(this.calculateStorges.length/groupNum);
    for(let i=0;i<groupNum;i++){
      let start=i*groupPartTotal;
      let end=(i+1)*groupPartTotal;
      //0 - 9  10 - 19  20 - 29
      this.Groups.push({start:start,end:end});
    }
  }
}
class GroupModel{
  start:number;
  end:number;
}
export class salesCalendarDataModel{
  week:string;
  dateShow:string;
  date:string;
  quantity:number;
  type:string;
  typeShow:string;
}
