import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.scss']
})
export class NgBootstrapComponent implements OnInit {

  constructor(private modalservice:NgbModal) { }

  ngOnInit() {
  }
  openModal(){
    const ngbModalRef:NgbModalRef=this.modalservice.open(ModalComponent,
      {backdrop:'static',size:'lg',windowClass:'animated slideInLeft'});
    ngbModalRef.componentInstance.title='Example Title';
    ngbModalRef.result.then((result)=>{

    },(reason)=>{

    });
  }
}
