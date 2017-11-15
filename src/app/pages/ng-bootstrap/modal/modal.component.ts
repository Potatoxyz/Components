import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
declare var $:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public NgbActiveModal:NgbActiveModal) { }

  ngOnInit() {
  }
  close(){
    $('.modal').removeClass('slideInLeft').addClass('slideOutRight');
    setTimeout(()=>{
      this.NgbActiveModal.close();
    },700);
  }
}
