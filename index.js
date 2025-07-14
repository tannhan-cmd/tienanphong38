

let myLink ="https://script.google.com/macros/s/AKfycbz89rM9zYveHo7dUDBUTzkGkylUwBtaLJYOxDIWukpJRj3U48hH1sm_V5ExzrxJg3yBeA/exec"
let myWebHookLinkMakeCom = "https://hook.eu2.make.com/bhimv5ds1amra3pgo2ldg91jlpukip6o9999";
init(myLink);
function init(link){
  let myForm = document.querySelector("form");
  let myButtonLink = document.querySelector("#myButtonLink");
  let myButtonDelete  =document.querySelector("#myButtonDelete");
  let myButton = document.querySelector("#myButton");
  let DeleteBtn = document.querySelector("#Delete");
  
  myForm.action = link;
  myButtonLink.href = link;
  myButtonDelete.href = link+"?action=delete";
  myButton.onclick = ()=>{ window.open(link, '_blank').focus();}
  DeleteBtn.onclick = ()=>{ 
    if (confirm("Xóa dữ liệu?") == true) {
      window.open(link+"?action=delete", '_blank').focus();
    }else{
      return
    }
  }
} 
//  Dùng để gửi dữ liệu về MAKE.COM
let buttonForm= document.querySelector("#btnSubmitID");
buttonForm.addEventListener("click", (e) => {
  let formData = new FormData(document.getElementById("form01"));
   fetch(myWebHookLinkMakeCom, {
        method: 'POST',
        body: formData
      })
})