var _=require('underscore');
export function  GenetatorRandom(length=1){
  //a-z 97-122
  //A-Z 65-90
  var resultStr='';
  var _geOneStr=function () {
    let c=Math.random(),d;
    if(c>=0.5){
      d=Math.round(Math.random()*(122-97)+97);
    }
    else{
      d=Math.round(Math.random()*(90-65)+65);
    }
    return String.fromCharCode(d);
  };
  if(length>1){
    resultStr=_(3).times(_geOneStr).join("");
  }
  return resultStr;
}
