import {Injectable} from "@angular/core";

@Injectable()
export class DropPreviewService{
  dropzonConfig={
    url:'',
    method:'POST',
    autoQueue:false,  //自动加入上传队列
    autoProcessQueue:false,//  对象 processQueue() 手动上传

    parallelUploads:10,  //单文件上传时，最多两个请求

    uploadMultiple:false,  //上传多文件时 触发事件events   processingmultiple  successmultiple  completemultiple ...
    maxFilesize:256,  //events  maxfilesexceeded

    paramName:'file',  //字段名

    maxThumbnailFilesize:10,  //预览图个数

    thumbnailWidth:120,  //预览尺寸
    thumbnailHeight:120,

    resizeWidth:null,  //上传之前修改图片实际尺寸
    resizeHeight:null,

    acceptedFiles:'image/*,.xls', //接受的文件类型

    addRemoveLinks:false,  //删除文件按钮

    //默认的错误信息
    dictResponseError:"网络连接错误!",
    //上传取消的提示
    dictUploadCanceled:"",

  };
  constructor(){}
}
