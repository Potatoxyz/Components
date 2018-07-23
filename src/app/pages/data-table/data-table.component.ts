import {Component, OnInit, ViewChild} from '@angular/core';
import {CuppaDataGrid} from "../../../shared/modules/cuppa-ng2-grid/src/app/angular2-dataGrid/angular2-dataGrid";
var data=require('../../../assets/mock/data.json');
declare var $:any;
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  //表格内容的reload通过在插件内添加 reload方法实现，oninit的内容就是 reload.
  //this.dataTable.reload
  @ViewChild(CuppaDataGrid) dataTable:CuppaDataGrid;
  isStockQuantity: boolean = false;
  orderState: string='欠票';
   config = {
    title: "Cuppa Data Table",
     h:600,
     w:100,
    itemHeight: 200,
    totalRows: 100,
    items: this.handleData()
  };
  PageInfo: {pageCount: number, pageIndex: number, pageSize: number, totalCount: number } = {pageCount: 50, pageIndex: 1, pageSize: 50, totalCount: 500 };
  constructor() {
  }
  ngOnInit() {
  }
  handleData(){
    let content:Array<any>=data.content.items;
    var formatContent=[];
    content.forEach((v,index)=>{
        //注意skuUrl
        var temp={};
      var availableStockSaleDay=this.getIntDay(v.availableInventory / v.avgPerDaySaleQuantity);
      var surplusStockSaleDay=this.getIntDay((v.waitReceiveQuantity + v.purchasingQuantity + v.availableInventory - v.possibleAllocateQuantity) / v.avgPerDaySaleQuantity) ;
        temp["编号"]=v;
        temp["产品信息"]='';
        temp["供应商/采购价"]='';
        temp["库存"]='';
        temp["可售天数"]={availableStockSaleDay:availableStockSaleDay,surplusStockSaleDay:surplusStockSaleDay};
        temp["仓库平均销量/价格/欠票"]='';
        temp["销量"]='';
        temp["补货数量"]='';
        temp["状态"]='';
        formatContent.push(temp);
    });
    // this.config.items=formatContent;
    return formatContent;
  }
  getIntDay(value: any) {
    return Math.ceil(value);
  }
  checkModal(target,type, isOver) {
    // isOver ? $('.detail-modal-body').eq(i).fadeIn(0) : $('.detail-modal-body').eq(i).fadeOut(0);
    if(type=='out'){
      var dom=$(target).parents('.info-wrapper').siblings('.detail-modal-body');
      isOver ? $(dom).fadeIn(0) : $(dom).fadeOut(0);
    }
    else{
      isOver ? $(target).parents('.detail-modal-body').fadeIn(0) : $(target).parents('.detail-modal-body').fadeOut(0);
    }
    // console.log(target)
  }
  Enter(target: any, index) {}
  autoSaveNumber(target: any, index){
    if(this.isStockQuantity){
      this.Enter(target, index);
    }
  }
  checkAuthority(){return true;}
  activa(target: any) {}
  ignore(){}
  getpageChanged(){}
  pageSizeChage(){}
}
