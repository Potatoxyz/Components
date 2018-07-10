import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";
import {CommonService, HeadList} from "./common.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ImgPreviewModalComponent} from "../Components/img-preview-modal/img-preview-modal.component";
declare var $:any;
var Raty=require('assets/plugin/raty/jquery.raty.js');
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers:[CommonService]
})
export class CommonComponent implements OnInit {
  DatePipe=new Date();
  CurrencyPipe:number=1.26;  // 默认使用USD，保留小数点后两位
  decimalPipe:number=1.926; //  整数位数(默认1) . 最小分数位数(默认0) - 最大分数位数(默认3) 1.0-3
  percentPipe:number=1.926; //  和numberPipe类似，把小数转换为百分数
  slicePipe=['a','b','c','d','e'];  //参数start必须,end默认到最后。[start,end)。start可负，-1表示最后一个
  titlePipe='haha heihei';      //首字母大写而已

  headList:Array<HeadList>=[];
  selectedIds:Array<any>=[];
  togglebottom:{toggle:boolean,fromindex:number}={toggle:true,fromindex:1};
  itemData=[];
  constructor(private commonService:CommonService,
              private modalService:NgbModal,
              private Ele:ElementRef) {
    this.headList=this.commonService.headList;
    this.itemData=this.commonService.data;
    new Raty($);
  }
  ngOnInit() {
    this.headList.forEach(value => {
      this.selectedIds.push({title:value.title,id:value.list[0].id});
    })
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
}
