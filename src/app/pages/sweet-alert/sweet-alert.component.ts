import { Component, OnInit } from '@angular/core';
import {SweetAlert} from "../../../shared/method/sweetAlert";
import {routerTransition} from "../../../shared/animation/route.animate";
declare var $:any;
@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SweetAlertComponent extends SweetAlert implements OnInit {

  constructor() {super(); }

  ngOnInit() {
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
