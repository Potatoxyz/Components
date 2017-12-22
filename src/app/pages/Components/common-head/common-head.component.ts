import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeadList} from "../../common/searchHead.service";

@Component({
  selector: 'app-common-head',
  templateUrl: './common-head.component.html',
  styleUrls: ['./common-head.component.scss']
})
export class CommonHeadComponent implements OnInit {
  @Input() List:Array<HeadList>=[];
  @Input() selectedIds:Array<any>=[];
  @Input() togglebottom:{toggle:boolean,fromindex:number}={toggle:false,fromindex:0};
  @Output() selected:any=new EventEmitter<any>();
  clickbottom=0;
  clicktop=0;

  orderTime: Array<any> = [{ id: -1, text: '昨天' },{ id: 1, text: '7天内' }, { id:2, text: '15天内' }, { id: 3, text: '30天内' }, { id: 4, text: '自定义' }];
  selectedordertimesearch: number = -1;
  timeSearchStart=new Date();
  timeSearchEnd=new Date();
  DatepickerOptions: any = {
    minYear: 1970,
    maxYear: 2050,
    displayFormat: 'YYYY/MM/DD',
    barTitleFormat: 'MMMM YYYY'
  };


  constructor() { }

  ngOnInit() {
  }
  select(id,index){
    this.selectedIds[index].id=id;
    this.selected.emit(this.selectedIds);
  }
}
