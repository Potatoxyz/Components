import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DropPreviewService} from "./drop-preview.service";
var Dropzone=require('dropzone');
declare var $:any;
@Component({
  selector: 'app-drop-preview',
  templateUrl: './drop-preview.component.html',
  styleUrls:['./drop-preview.scss'],
  providers:[DropPreviewService]
})
export class DropPreviewComponent implements OnInit,AfterViewInit {
  @ViewChild('zone') zone:ElementRef;
  dropzone:any;
  dropzoneConfig:any;
  constructor(private dropPreviewService:DropPreviewService) {
    this.dropzoneConfig=dropPreviewService.dropzonConfig;
  }
  ngOnInit() {}
  ngAfterViewInit(){
    //has already attached BUG
    Dropzone.autoDiscover = false;
    this.dropzone=new Dropzone(this.zone.nativeElement,$.extend(this.dropzoneConfig,{url: "/file/post"}))
  }
  doUpload(){
    console.log(this.dropzone);
    this.dropzone.processQueue();
  }
}
