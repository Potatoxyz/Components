import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'sort'
})
export class SortPipe implements PipeTransform{
  transform(value:any,args?:any){
    if(args){
      return value.sort((a,b)=>{
        if(a.value>b.value){
          return -1;
        }
        else if(a.value<b.value){
          return 1;
        }
        return 0;
      });
    }
    else{
      return value.sort((a,b)=>{
        if(a.value<b.value){
          return -1;
        }
        else if(a.value>b.value){
          return 1;
        }
        return 0;
      });
    }
  }
}
