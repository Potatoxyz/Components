import swal from 'sweetalert2'
declare var $:any;
//不是动态加载组件，更耗费性能

//还有step1>step2...的连续弹窗
//Example https://limonte.github.io/sweetalert2
export class SweetAlert{
  error(message){
    swal({
      title:'错误!',
      text:message,
      type:'error',
      cancelButtonText:'取消',
    });
  }
  confirm(message:string,confirm:()=>any,cancel?:()=>any){
    swal({
      title:'是否确定?',
      text:message,
      type:'question',
      showCancelButton:true,
      confirmButtonText:'确定',
      cancelButtonText:'取消',
      allowOutsideClick:false,
    }).then(
      (result)=>{
        if(result.value)confirm();
        if(result.dismiss)cancel();
      })
  }
  success(message){
    swal({
      title:'成功!',
      text:message,
      type:'success',
      timer:1500
    })
  }
  cutomCssAlert(confirm:()=>any,cancel?:()=>any){
    swal({
      title:'成功!',
      input:'text',
      animation: false,
      customClass:'animated tada bg-black',
      confirmButtonText:'确定',
      cancelButtonText:'取消',
      showCancelButton:true,
      showLoaderOnConfirm: true,
      allowOutsideClick:false,
      preConfirm:(text)=>{
          return new Promise((resolve)=>{
            setTimeout(()=>{
              resolve();
              if(text==''){
                swal.showValidationError(
                  '不能为空'
                )
              }
            },1000);//2秒之后调用自己
          })
      }
    }).then((result)=>{
      if(result.value){
        confirm();
      }
    })
  }
}
