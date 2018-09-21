import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-wrap',
  templateUrl: './modal-wrap.html',
  styleUrls: ['./modal-wrap.scss']
})
export class ModalWrapComponent {
  @Input() modalTitle:string;
  @Input() hasSaveButton:boolean=true;
  @Input() blackTheme:boolean=false;
  @Input() isBig:boolean=false;
  @Input() emitValue:any;
  constructor(private activeModal:NgbActiveModal) {}
  onSave(){
    this.activeModal.close(this.emitValue);
  }
  closeModal(){
    this.activeModal.dismiss();
  }

}
