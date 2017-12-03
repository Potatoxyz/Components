import {Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appInputable]',
  host:{
  '(dblclick)':'dblclick($event.target)'
  }
})
export class InputableDirective {
  constructor(private el:ElementRef,
              private rd2:Renderer2) { }
  dblclick(target:any){
      let oddValue=target.innerText;
      target.innerText='';
      let inputnode=this.rd2.createElement('input');
      inputnode.setAttribute('type','text');
      inputnode.style.cssText+='height:100%;';
      inputnode.value=oddValue;
    // inputnode.focus();
      let buttonnode=this.rd2.createElement('button');
      buttonnode.setAttribute('class','btn btn-primary');
      buttonnode.innerText='确定';
      buttonnode.style.cssText+='height:100%;vertical-align:top;padding:0 7px;';
      buttonnode.addEventListener('click',()=>{
        target.innerText=inputnode.value;
      });
      this.rd2.appendChild(target,inputnode);
      this.rd2.appendChild(target,buttonnode);
      // console.log(this.el);
      // console.log(this.rd2);
      // console.log(target);
  }
}
