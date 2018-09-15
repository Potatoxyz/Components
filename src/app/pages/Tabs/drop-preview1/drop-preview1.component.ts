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
    this.dropzone.on('success',(file,res)=>{
      //上传成功后禁用上传按钮
      var buttons= file.previewElement.querySelectorAll("[data-dz-addToQueue]");
      _.each(buttons,(value)=>{
        value.setAttribute("disabled","true");
      });
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
      var addButtons=file.previewElement.querySelectorAll("[data-dz-addToQueue]");//NodeList
      //自定义的指定的某个文件的上传
      _.each(addButtons, (value,index)=> {
        value.addEventListener('click', () =>{
          //清空上传队列，添加该文件到上传队列
          _.each(this.fileStock,(value)=>{
            this.dropzone.cancelUpload(value)
          });
          this.dropzone.enqueueFile(file);
          console.log(file)
          console.log("add to upload queue");
          //获取已经加入上传队列的文件
          var files=this.confirmFiles();
          this.confirm("即将上传的文件："+files,()=>{
            this.dropzone.processQueue()
          },()=>{});
        });
      })
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
}
