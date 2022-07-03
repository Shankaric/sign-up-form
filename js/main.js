const error=document.querySelector('.error');
const error1=document.querySelector('.error1');
const error2=document.querySelector('.error2');
const error3=document.querySelector('.error3');
const firstname=document.querySelector('#firstname');
const lastname=document.querySelector('#lastname');
const email=document.querySelector('#email');
const phone=document.querySelector('#phone');
const pwd=document.querySelector('#pwd');
const cpwd=document.querySelector('#cpwd');
const pwdval=document.getElementById('pwd');
const cpwdval=document.getElementById('cpwd');
const overall=document.querySelector('.overall');
var validmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

document.querySelectorAll('.inputname').forEach(item => {
    item.addEventListener('focusout', function() {
if(item.value.length==0){
    if(firstname.value.length==0){
        error.setAttribute('style','visibility:visible');
        firstname.setAttribute('style', 'box-shadow:0px 0px 7px red;');
    }
    else if(email.value.length==0){
        error1.setAttribute('style','visibility:visible');
        email.setAttribute('style', 'box-shadow:0px 0px 7px red;');
    }
    else if(phone.value.length==0){
        error2.setAttribute('style','visibility:visible');
        phone.setAttribute('style', 'box-shadow:0px 0px 7px red;');
    }
    //    else{
        
    //     item.setAttribute('style', 'box-shadow:0px 0px 7px green;');
    // }
}else if(phone.value){
    var numbers = /^[0-9]+$/;
    if(phone.value.match(numbers)&&phone.value.length==10){
        error2.setAttribute('style','visibility:hidden');
        phone.setAttribute('style', 'box-shadow:0px 0px 7px green;');
    }
    else{
        error2.innerHTML="Please Enter a valid number"
        error2.setAttribute('style','visibility:visible !important');
        phone.setAttribute('style', 'box-shadow:0px 0px 7px red;');

    }
}else if(email.value){
    if(email.value.match(validmail)){
        error1.setAttribute('style','visibility:hidden');
        email.setAttribute('style', 'box-shadow:0px 0px 7px green;');
    }
    else{
        error1.innerHTML="Please Enter a valid mail"
        error1.setAttribute('style','visibility:visible !important');
        email.setAttribute('style', 'box-shadow:0px 0px 7px red;');

    }}
// else if(pwd.value==!0 && cpwd.value==!0){
//     if(pwdval.value==cpwdval.value && pwdval.value.length==!0 && cpwdval.value.length==!0){
//         error3.setAttribute('style','visibility:hidden !important');
//         pwd.setAttribute('style', 'box-shadow:0px 0px 7px green;');
//         cpwd.setAttribute('style', 'box-shadow:0px 0px 7px green;');

//     }
//     else{
//         error3.setAttribute('style','visibility:visible !important');
//         pwd.setAttribute('style', 'box-shadow:0px 0px 7px red;');
//         cpwd.setAttribute('style', 'box-shadow:0px 0px 7px red;');
//     }
// }
else{
    error.setAttribute('style','visibility:hidden');
    error1.setAttribute('style','visibility:hidden !important');
    error2.setAttribute('style','visibility:hidden !important');
    error3.setAttribute('style','visibility:hidden !important');
    item.setAttribute('style', 'box-shadow:0px 0px 7px green;');

}
    });
});
  
function checkvald(){
    console.log(pwdval.value.length);
    var numbers = /^[0-9]+$/;
    if(firstname.value.length>0 && email.value.length>0 && email.value.match(validmail) && phone.value.length>0 && pwd.value.length>0 && cpwd.value.length>0 && phone.value.match(numbers)&&phone.value.length==10){
      
        const para = document.createElement("h6");
        const node = document.createTextNode("Hello  "+firstname.value+'! You are a member now!');
        para.appendChild(node);
        const element = document.querySelector(".DIV");
        element.appendChild(para); 
        firstname.value="";
        lastname.value="";
        email.value="";
        phone.value="";
        pwd.value="";
        cpwd.value="";error2.innerHTML="";
        firstname.setAttribute('style', ' box-shadow: 0 0 5px rgba(142, 134, 134, 0.383);');
        lastname.setAttribute('style', ' box-shadow: 0 0 5px rgba(142, 134, 134, 0.383);');
        email.setAttribute('style', ' box-shadow: 0 0 5px rgba(142, 134, 134, 0.383);');
        phone.setAttribute('style', ' box-shadow: 0 0 5px rgba(142, 134, 134, 0.383);');
        pwd.setAttribute('style', ' box-shadow: 0 0 5px rgba(142, 134, 134, 0.383);');
        cpwd.setAttribute('style', ' box-shadow: 0 0 5px rgba(142, 134, 134, 0.383);');
    }
    else if(pwdval.value==cpwdval.value && pwdval.value.length>0 && cpwdval.value.length>0  ){


        error3.setAttribute('style','visibility:hidden !important');
        pwdval.setAttribute('style', 'box-shadow:0px 0px 7px green;');
        cpwdval.setAttribute('style', 'box-shadow:0px 0px 7px green;');
    

    }
    else{
        error3.setAttribute('style','visibility:visible !important');
        pwdval.setAttribute('style', 'box-shadow:0px 0px 7px red;');
        cpwdval.setAttribute('style', 'box-shadow:0px 0px 7px red;');
    }

   
}