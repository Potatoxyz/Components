import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'getfiled'
})
export class GetFiledPipe implements PipeTransform{
  transform(value:any,args?:any){
    if(value){
      if(args!=''){
        return value[args];
      }
      else{
        let keys=Object.keys(value);
        return value[keys[0]];
      }
    }
    else{
      return;
    }
  }
}
