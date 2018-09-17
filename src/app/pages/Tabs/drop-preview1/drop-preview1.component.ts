import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SweetAlert} from "../../../../shared/method/sweetAlert";
import {DropPreviewService} from "../drop-preview/drop-preview.service";
var Dropzone=require('dropzone');
declare var $:any;
declare var _:any;
@Component({
  selector: 'app-drop-preview1',
  templateUrl: './drop-preview1.component.html',
  styleUrls:['./drop-preview1.scss'],
  providers:[DropPreviewService]
})
export class DropPreview1Component extends SweetAlert implements OnInit,AfterViewInit {
  @ViewChild('uploadContainer') uploadContainer:ElementRef;
  @ViewChild('tml') tml:ElementRef;
  @ViewChild('previewContaienr') previewContaienr:ElementRef;
  fileStock=[];
  dropzone:any;
  dropzoneConfig:any;
  constructor(private dropPreviewService:DropPreviewService) {
    super();
    this.dropzoneConfig=dropPreviewService.dropzonConfig;
  }
  ngOnInit() {}
  ngAfterViewInit(){
    //解决 has already attached BUG
    Dropzone.autoDiscover = false;

    this.dropzone=new Dropzone(this.uploadContainer.nativeElement,$.extend(this.dropzoneConfig,{
      url: "http://localhost:3001/server/upload",
      paramName:'uploadForm',
      //批量上传
      uploadMultiple:true,
      //更换预览模板
      previewTemplate:this.tml.nativeElement.innerHTML,
      previewsContainer:this.previewContaienr.nativeElement,
    }));
    var listener=(event)=>{
      //清空上传队列，添加该文件到上传队列
      console.log(event)
      _.each(this.fileStock,(value)=>{
        this.dropzone.cancelUpload(value)
      });
      this.dropzone.enqueueFile(event.data);
      console.log(event.data);
      console.log("add to upload queue");
      //获取已经加入上传队列的文件
      var files=this.confirmFiles();
      this.confirm("即将上传的文件："+files,()=>{
        this.dropzone.processQueue()
      },()=>{});
    };
    //自定义的指定的某个文件的上传
    var uploadsSingleFile= (file,isRemoveListener?:any)=> {
      var addButtons=file.previewElement.querySelectorAll("[data-dz-addToQueue]");//NodeList
      if(isRemoveListener){
        _.each(addButtons, (value,index)=> {
          $(value).off();
        });
        return;
      }
      _.each(addButtons, (value,index)=> {
        $(value).on('click',file,listener);
      });
    };
    this.dropzone.on('success',(file,res)=>{
      //显示上传成功的提示
      var successTexts=file.previewElement.querySelectorAll(".upload-success");
      _.each(successTexts,value=>{
        $(value).css("display","block")
      });
      //移除上传按钮所有事件
      uploadsSingleFile(file,true);
      //清空暂存的文件预览
      this.fileStock=[];
      //清空错误提示
      this.editErrorText(file,"");
    });
    this.dropzone.on('error',(file,res)=>{
      let errorText=res.ErrorMessage||res;
      console.log(errorText);
      //显示后台返回的错误信息
      this.editErrorText(file,errorText);
      //上传失败后，改error状态未added进行再次上传
      file.status="added";
    });
    this.dropzone.on('addedfile',(file)=>{
      //批量上传
      this.fileStock.push(file);
      //绑定 上传按钮事件
      uploadsSingleFile(file);
    });
    this.dropzone.on('removedfile',(file)=>{
      let index=this.fileStock.findIndex(v=>v.name==file.name);
      if(index!=-1){
        this.fileStock.splice(index,1);
      }
    });
  }
  confirmFiles() {
    var currentQueueFiles=this.dropzone.getQueuedFiles();
    var files=_.map(currentQueueFiles,(value)=>{
      return value.name;
    }).join(",");
    return files;
  }
  editErrorText(file,errorText) {
    var errorMessages= file.previewElement.querySelectorAll("[data-dz-errormessage]");
    _.each(errorMessages,(value)=>{
      value.textContent=errorText;
    });
  }
  openChooseFile(){
    this.dropzone.hiddenFileInput.click();
  }
  uploadAll(){
    _.each(this.fileStock,(value)=>{
      this.dropzone.enqueueFile(value);
    });
    var files=this.confirmFiles();
    this.confirm("即将上传的文件："+files,()=>{
      this.dropzone.processQueue()
    },()=>{
      //清空加入队列的文件
      _.each(this.fileStock,(value)=>{
        this.dropzone.cancelUpload(value)
      });
    });
  }
  clearAll(){
    this.fileStock=[];
    this.dropzone.removeAllFiles();
  }
}
