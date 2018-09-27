import {Injectable} from "@angular/core";

declare var $:any;
declare var layer:any;
declare var CKEDITOR:any;
var Dropzone=require('dropzone');
@Injectable()
export class UploadFilePlugin{
  private a = {
    exec: ()=>{
      this.show();
    }
  };
  private b = 'simpleupload';
  uploadUrl:string="";
  constructor(){
  }
  plugininit(){
    let plugin=CKEDITOR.plugins.get('simpleupload');
    if(!plugin){
      CKEDITOR.plugins.add(this.b, {
        init:  (editor)=> {
          editor.addCommand(this.b, this.a);
          var host=window.location.host;
          var iconUrl='http://'+host+'/assets/img/upload.jpg';
          editor.ui.addButton('simpleupload', {
            label: '添加图片',  //鼠标悬停在插件上时显示的名字
            icon: iconUrl,   //自定义图标的路径
            command:this.b
          });
        }
      });
    }
  }
  private show() {
    layer.open({
      type: 1,
      title: "附件上传",
      shadeClose: true,
      area:"682px",
      closeBtn:1,
      resize:false,
      content: '<div cass=ck-upload-container><div class=ck-body><div class=uploadContainer id=uploadContainer><div class="acionIcons add-wrap"><i class="fa fa-plus-circle"></i></div><div class="acionIcons upload-wrap"><i class="fa fa-upload"></i></div><div class="acionIcons clear-wrap"><i class="fa fa-trash"></i></div><div class=previewContaienr id=previewContaienr></div></div></div></div><div class=tml id=tml><div class=file-item><div class="item img-wrap"><img class=rounded data-dz-thumbnail></div><div class="item progress-wrap"><div class=progress><div data-dz-uploadprogress class="progress-bar progress-bar-striped progress-bar-animated" role=progressbar aria-valuenow=50 aria-valuemin=0 aria-valuemax=100></div></div></div><div class="error item"><span data-dz-errormessage></span></div><div class="upload-success item"><span><i class="fa fa-check-circle fa-right text-green"></i>上传成功</span></div><div class=item><span data-dz-name></span></div><div class="item action-item"><a data-dz-addToQueue class=action-link>上传</a><a data-dz-remove class=action-link>删除</a></div></div></div>',
      success: ()=> {
        var uploadContainer=$('#uploadContainer'),previewContaienr=$('#previewContaienr');
        var d=new Dropzone(uploadContainer[0],{
          url:this.uploadUrl,
          // url:'http://localhost:3001/server/upload',
          paramName:'upload',
          autoQueue:false,
          // uploadMultiple:true, //upload[0],upload[1],upload[2],
          previewTemplate:$('#tml')[0].innerHTML,
          previewsContainer:previewContaienr[0],
          dictUploadCanceled:"",
        });
        var fileStock=[];
        uploadContainer.children('.add-wrap').on('click',openChooseFile);
        uploadContainer.children('.upload-wrap').on('click',uploadAll);
        uploadContainer.children('.clear-wrap').on('click',clearAll);
        d.on('success',(file,res)=>{
          //显示上传成功的提示
          var successTexts=file.previewElement.querySelectorAll(".upload-success");
          $.each(successTexts,(index,value)=>{
            $(value).css("display","block")
          });
          //移除上传按钮所有事件
          uploadsSingleFile(file,true);
          //清空暂存的文件预览
          fileStock=[];
          //清空错误提示
          editErrorText(file,"");

          //保存返回的文件地址


        });
        d.on('error',(file,res)=>{
          console.log(file.status);
          let errorText=res.ErrorMessage||res;
          //显示后台返回的错误信息
          editErrorText(file,errorText);
          //上传失败后，改error状态未added进行再次上传
          file.status="added";
        });
        d.on('addedfile',(file)=>{
          //批量上传
          fileStock.push(file);
          //绑定 上传按钮事件
          uploadsSingleFile(file);
          //其他文件类型预览
          outherFileTypePreview(file);
        });
        function editErrorText(file,errorText) {
          var errorMessages= file.previewElement.querySelectorAll("[data-dz-errormessage]");
          $.each(errorMessages,(index,value:any)=>{
            value.textContent=errorText;
          })
        }
        //自定义的指定的某个文件的上传
        var uploadsSingleFile= (file,isRemoveListener?:any)=> {
          var addButtons=file.previewElement.querySelectorAll("[data-dz-addToQueue]");//NodeList
          if(isRemoveListener){
            $.each(addButtons, (index,value)=> {
              $(value).off();
            });
            return;
          }
          $.each(addButtons, (index,addBtn)=> {
            $(addBtn).on('click',(event)=>{
              //清空上传队列，添加该文件到上传队列
              $.each(fileStock,(index,file1)=>{
                d.cancelUpload(file1)
              });
              d.enqueueFile(file);
              console.log("add to upload queue");
              d.processQueue();
            });
          });
        };
        function openChooseFile() {
          d.hiddenFileInput.click();
        }
        function uploadAll(){
          $.each(fileStock,(index,value)=>{
            d.enqueueFile(value);
          });
          d.processQueue();
        }
        function clearAll(){
          fileStock=[];
          d.removeAllFiles();
        }
        function outherFileTypePreview(file) {
          let index=file.name.lastIndexOf('.');
          let suffix=file.name.substr(index+1);
          var imgDom=$(file.previewElement).find("[data-dz-thumbnail]");
          console.log(suffix);
          function setSize(dom) {
            $(dom).css({"width":"120px","height":"120px"});
          }
          switch (suffix){
            case "txt":{
              $(imgDom).attr({"src":"assets/img/txt.jpg"});
              setSize(imgDom);
              break;
            }
            case "ppt":{
              $(imgDom).attr({"src":"assets/img/ppt.jpg"});
              setSize(imgDom);
              break;
            }
            case "wps":{
              $(imgDom).attr({"src":"assets/img/wps.jpg"});
              setSize(imgDom);
              break;
            }
            case "xls":{
              $(imgDom).attr({"src":"assets/img/xls.jpg"});
              setSize(imgDom);
              break;
            }
            case "zip":{
              $(imgDom).attr({"src":"assets/images/fileIcon/zip.jpg"});
              setSize(imgDom);
              break;
            }
            default:{
              $(imgDom).attr({"src":"assets/images/fileIcon/unknown.jpg"});
              setSize(imgDom);
              break;
            }
          }
        }
      }
    })
  }
}
