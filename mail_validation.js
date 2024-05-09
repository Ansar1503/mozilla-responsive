let mail_error=document.getElementById('error');
let mail_rule = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let submit=document.getElementById("submit");
let mail=document.getElementById('email');

function validate_email(){
    
    if(mail.value.length==0){   
        mail_error.innerHTML='Email required'
        mail_error.style.color="red";
        return false;
    }else{

        mail_error.innerHTML=''
        return true;
  }


}


submit.addEventListener('click',function(){    
    if(mail.value.length==0){
        alert("Email is empty");
        return false;
    }else if(!mail.value.match(mail_rule)){
        mail_error.innerHTML='Email is not valid'
        mail_error.style.color="white";
        return false;
    }else{
        alert("Success")  
        return true;
        
    }



});