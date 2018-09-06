import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";
import {CommonService} from "./common.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ImgPreviewModalComponent} from "../Components/img-preview-modal/img-preview-modal.component";
import {HeadList} from "../../../shared/Models/head-list.model";
import {SweetAlert} from "../../../shared/method/sweetAlert";
import {DataCalcService} from "../../../shared/service/dataCalc/dataCalc.service";
declare var $:any;
var Raty=require('assets/plugin/raty/jquery.raty.js');
var MenuList=require('../page.menu');
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers:[CommonService,DataCalcService]
})
export class CommonComponent extends SweetAlert implements OnInit {
  DatePipe=new Date();
  CurrencyPipe:number=1.26;  // 默认使用USD，保留小数点后两位
  decimalPipe:number=4.926952; //  整数位数(默认1) . 最小分数位数(默认0) - 最大分数位数(默认3) 1.0-3
  percentPipe:number=1.926; //  和numberPipe类似，把小数转换为百分数
  slicePipe=['a','b','c','d','e'];  //参数start必须,end默认到最后。[start,end)。start可负，-1表示最后一个
  titlePipe='haha heihei';      //首字母大写而已

  headList:Array<HeadList>=[];
  selectedIds:Array<any>=[];
  togglebottom:{toggle:boolean,fromindex:number}={toggle:true,fromindex:1};
  itemData=[];

  ngModelValue='123';

  ckeditorValue='<div style="color:red;font-size: 20px;">123</div>';

  MenuItem;
  Festival=[];
  selectedFestivalId=1;
  dateCalcResult={target:null,gap:null};
  constructor(private commonService:CommonService,
              private dataCalcService:DataCalcService,
              private modalService:NgbModal,
              private Ele:ElementRef) {
    super();
    this.headList=this.commonService.headList;
    this.itemData=this.commonService.data;
    new Raty($);
    this.MenuItem=MenuList[0];
    this.Festival=dataCalcService.Festival;
  }
  ngOnInit() {
    this.headList.forEach(value => {
      this.selectedIds.push({title:value.title,id:value.list[0].id});
    });
    this.calcFestival(this.selectedFestivalId);
  }
  ngAfterViewInit(){
    let ratyDom=this.Ele.nativeElement.querySelectorAll('.ratyBox');
    $(ratyDom).raty({
      starHalf: 'assets/plugin/raty/images/star-half.png',
      starOff: 'assets/plugin/raty/images/star-off.png',
      starOn: 'assets/plugin/raty/images/star-on.png',
      readOnly:true,
      score:3.5
    });
  }
  getSelectedId(val:any){
    console.log(val);
  }
  toggleHover(el,isOpen){
    if(isOpen){
      $(el).children('.hover-box').fadeIn();
    }
    else{
      $(el).children('.hover-box').hide()
    }
  }
  imgPreview() {
    const modal = this.modalService.open(ImgPreviewModalComponent);
    modal.result.then(result => { }, reject => { });
  }
  openNgModel(){
    this.success(this.ckeditorValue);
  }
  getValueChange(data){
    this.selectedFestivalId=data.value;
    this.calcFestival(data.value);
  }
  calcFestival(id){
    let item= this.Festival.find(v=>v.id==id);
    if(item){
      if(item.date!=='null'){
        let date=item.date.split('-');
        let m=date[0],d=date[1];
        let targetDate=new Date(new Date().getFullYear(),m-1,d);
        //节日和当前日期相差的天数
        let gap=this.dataCalcService.getResultDay(targetDate);
        this.dateCalcResult.target=targetDate.toLocaleDateString();
        this.dateCalcResult.gap=gap;
      }
      else{
        //5月第二个星期天
        if(item.text=='母亲节'){
          let date=new Date(new Date().getFullYear(),4,1);//5月1日
          let order=2;
          let sunday=7;
          this.calcWeekDay(date,order,sunday);
        }
        //6月第三个星期天
        if(item.text=='父亲节'){
          let date=new Date(new Date().getFullYear(),5,1);//6月1日
          let order=3;
          let sunday=7;
          this.calcWeekDay(date,order,sunday);
        }
        //11月第四个星期四
        if(item.text=='感恩节'){
          let date=new Date(new Date().getFullYear(),10,1);//11月1日
          let order=4;
          let thursday=4;
          this.calcWeekDay(date,order,thursday);
        }
      }
    }
  }
  //计算几月的第几个星期
  calcWeekDay(targetDate:Date,order:number,week:number){
    let date=new Date(targetDate.toLocaleDateString());
    let d=date.getDay();
    console.log(date.toLocaleDateString()+' '+'星期几：'+d);
    //找出第一个星期x
    while (d!=week){
      if(d<week){
        d+=1;
        date.setDate(date.getDate()+1);
      }
      else{
        d-=1;
        date.setDate(date.getDate()-1);
      }
    }
    console.log(`第一个星期${week}几日：`+date.getDate());//第一个星期x
    //第n个星期x  再加order-1个星期天数
    date.setDate(date.getDate()+7*(order-1));
    let gap=this.dataCalcService.getResultDay(date);
    this.dateCalcResult.target=date.toLocaleDateString();
    this.dateCalcResult.gap=gap;
  }
}
