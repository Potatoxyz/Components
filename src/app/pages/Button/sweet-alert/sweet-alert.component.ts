import {Component, Input, OnInit} from '@angular/core';
import {SweetAlert} from "../../../../shared/method/sweetAlert";
import {routerTransition} from "../../../../shared/animation/route.animate";
import {Hero} from "../../http/service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
declare var $:any;
@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss'],
})
export class SweetAlertComponent extends SweetAlert implements OnInit {
  private _ayncData=new BehaviorSubject<Hero>(new Hero());
  @Input() set ayncData(ayncData){
    this._ayncData.next(ayncData);
  };
  get ayncData(){
    return this._ayncData.getValue();
  }
  constructor() {super(); }

  ngOnInit() {
    this.getAyncData();
  }
  getAyncData(){
    this._ayncData.subscribe(data=>{
      // console.log(data);  //会输出两次，一次是初始化的时候未获取值，输出空；值发生改变时又会输出一次
    })
  }
  showError(){
    this.error('不，不哈哈哈');
  }
  showConfirm(){
    this.confirm('哈哈哈',
      ()=>{
      console.log('对，要哈哈哈');
      this.showSuccess();
      },
      ()=>{
      console.log('不，不哈哈哈');
    });
  }
  showSuccess(){
    this.success('成功哈哈哈');
  }
  showCustomAlert(){
    this.cutomCssAlert(()=>{this.success('不输123')});
    $('.swal2-contentwrapper .swal2-title').css('display','none'); //不显示title
    $('.swal2-validationerror').css('background','transparent');             //改变错误提示的背景
  }
}
