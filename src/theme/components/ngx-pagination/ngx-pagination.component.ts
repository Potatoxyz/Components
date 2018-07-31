import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageInfoModel} from "../../../shared/Models/page-list.model";

@Component({
  selector: 'app-ngx-pagination',
  templateUrl: './ngx-pagination.html',
  styleUrls: ['./ngx-pagination.scss']
})
export class NgxPaginationComponent {
  @Input() PageInfo:PageInfoModel;
  @Output() Load:EventEmitter<any>=new EventEmitter<any>();
  constructor() {}
  pageChanged(pn:number){
    this.PageInfo.pageIndex=pn;
    this.Load.emit(pn);
  }
  loadData(pn:number=1){
    this.Load.emit(1);
  }
}
