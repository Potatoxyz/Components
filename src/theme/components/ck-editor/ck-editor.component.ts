import {
  AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnInit, Output, Self, SimpleChanges,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel} from "@angular/forms";


declare var CKEDITOR:any;
import './ckeditor.loader.ts';
import 'assets/plugin/ckeditor/ckeditor.js';
export const CustomValueAccessor={
  provide:NG_VALUE_ACCESSOR,
  useExisting:forwardRef(()=>CkEditorComponent),
  multi: true
}
@Component({
  selector: 'app-ck-editor',
  template: '<textarea #ck></textarea>',
  styleUrls: ['./ck-editor.scss'],
  providers:[CustomValueAccessor]
})
export class CkEditorComponent implements OnInit,AfterViewInit,ControlValueAccessor{
  ckIns:any;
  innerValue:any;
  @ViewChild('ck') ck:ElementRef;
  //默认字段名是upload
  customer_default_config={
    height:'200px',
    enterMode :CKEDITOR.ENTER_BR,
    extraPlugins: 'colorbutton,font,image2,uploadimage',
    toolbar: [['Smiley','Bold','Italic','Underline','Strike','TextColor','FontSize','NumberedList','BulletedList','Blockquote','JustifyLeft','Link','Image','Table']],  // 工具部分
    skin:'moono-lisa',
    filebrowserUploadUrl: 'http://localhost:3001/server/upload?type=image',
    filebrowserImageUploadUrl: 'http://localhost:3001/server/upload?type=image',
  };
  @Input() config?:any={};
  onChange=(v:any)=>{};
  onTouched=()=>{};
  constructor(private ngZone: NgZone) {}
  ngOnInit() {
    this.initCkeditor();
  }
  ngAfterViewInit(){}

  initCkeditor(){
    if (typeof CKEDITOR === 'undefined') {
      return console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
    }
    let opt = Object.assign({}, this.customer_default_config, this.config);
    this.ckIns = CKEDITOR.replace(this.ck.nativeElement, opt);
    this.ckIns.setData(this.innerValue);
    this.ckIns.on('change', () => {
      this.onTouched();
      let val = this.ckIns.getData();
      console.warn('chagne', val);
      this.updateValue(val)
    });
  }

  //通过ngZone主动更新外部值
  updateValue(value){
    this.ngZone.run(()=>{
      this.innerValue=value;
      this.onChange(value)
    })
  }

  //ControlValueAccessor
  writeValue(value: any): void{
    this.innerValue=value;
    if(this.ckIns){
      this.ckIns.setData(value)
    }
  };
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
