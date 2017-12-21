import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AnywereService} from "../../anywere.service";
declare var $:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public NgbActiveModal:NgbActiveModal,
              private anywereService:AnywereService) { }

  ngOnInit() {
  }
  close(){
    $('.modal').removeClass('slideInLeft').addClass('slideOutRight');
    setTimeout(()=>{
      this.NgbActiveModal.close();
    },700);
  }
  send(){
    this.anywereService.sendMessage('this message is send to http!');
  }
}
