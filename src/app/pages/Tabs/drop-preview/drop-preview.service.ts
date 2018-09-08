import {Injectable} from "@angular/core";

@Injectable()
export class DropPreviewService{
  dropzonConfig={
    url:'',
    method:'POST',
    autoProcessQueue:false,//  对象 processQueue() 手动上传

    uploadMultiple:false,  //上传多文件时 触发事件events   processingmultiple  successmultiple  completemultiple ...
    maxFilesize:256,  //events  maxfilesexceeded

    paramName:'file',  //字段名

    maxThumbnailFilesize:10,  //预览图个数

    thumbnailWidth:120,  //预览尺寸
    thumbnailHeight:120,

    resizeWidth:null,  //上传之前修改图片实际尺寸
    resizeHeight:null,

    acceptedFiles:'image/*,.xls', //接受的文件类型

    addRemoveLinks:true,  //删除文件
  };
  constructor(){}
}
