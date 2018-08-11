import {Component, OnInit, Self} from '@angular/core';
import {ControlValueAccessor, NgModel} from "@angular/forms";

@Component({
  selector: 'app-ng-model-test[ngModel]',
  templateUrl: './ng-model-test.component.html',
  styleUrls: ['./ng-model-test.component.scss'],
  providers:[NgModel]
})
export class NgModelTestComponent implements OnInit,ControlValueAccessor {
  model:NgModel;
  value:any;
  _onChange=(_value:any)=>{};
  constructor(private v:NgModel){
    this.model=v;
    v.valueAccessor=this;  //valueAccessor 是 ControlValueAccessor类，需实现writeValue等等方法，所以指向this
  }
  ngOnInit(){}


  writeValue(inputValue: any): void{
    this.value=inputValue;
  };
  registerOnChange(fn: any): void{
    this._onChange=(value:any)=>{
        this.model.viewToModelUpdate(value); //通知外部更新
        this.writeValue(value); //自己更新
    }
  };
  registerOnTouched(fn: any): void{};
}
