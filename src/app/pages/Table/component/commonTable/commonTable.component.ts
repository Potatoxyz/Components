import {Component, OnInit} from '@angular/core';
import {PageInfoModel} from "../../../../../shared/Models/page-list.model";
import {CommonTableService} from "./commonTable.service";
import {PaginatePipe} from 'ngx-pagination';
@Component({
  selector: 'app-commonTable',
  templateUrl: './commonTable.component.html',
  providers:[CommonTableService,PaginatePipe]
})
export class CommonTableComponent implements OnInit {
  PageInfo: PageInfoModel = {
    pageIndex: 1,
    pageSize: 5,
    totalCount: 0
  };
  tableDate;
  selectedTableDateItems=new Set();
  currentPages=[];
  valueSort;
  constructor(private commonTableService:CommonTableService,
              private paginatePipe:PaginatePipe) {
    this.tableDate=commonTableService.tableDate;
  }

  ngOnInit() {
  }
  pageChanged($event){}
  selectThisPage(checked,index){
    //获取本页数据
    let pageData=this.paginatePipe.transform(this.tableDate,{ id: 'table',
      itemsPerPage: this.PageInfo.pageSize,
      currentPage: this.PageInfo.pageIndex,
      totalItems: this.PageInfo.totalCount}
      );
    console.log(pageData);
  }
  selectSingle(checked,index){
    if(checked){
      this.selectedTableDateItems.add(index);
    }
    else{
      this.selectedTableDateItems.delete(index);
    }
  }
}
