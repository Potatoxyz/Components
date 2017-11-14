import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.scss']
})
export class NgBootstrapComponent implements OnInit {

  constructor(private modalservie:NgbModal) { }

  ngOnInit() {
  }
  openModal(){
    this.modalservie.open(ModalComponent);
  }
}
