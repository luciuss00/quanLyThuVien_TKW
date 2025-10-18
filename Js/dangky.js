const formDangky = document.getElementById("formDangky");
const userNameE = document.getElementById("userName");
const emailE = document.getElementById("email");
const passwordE = document.getElementById("password");
const re_passwordE = document.getElementById("re-password");

const telE = document.getElementById("tel");
const CCCD_E=document.getElementById("CCCD");
const userNameError =  document.getElementById("userNameError");
const passwordError =  document.getElementById("passwordError");
const re_passwordError =  document.getElementById("re-passwordError");
const re_passwordNotsuit = document.getElementById("re-passwordNotsuit");
const emailError =  document.getElementById("emailError");
const GenderError = document.getElementById("GenderError")
const telError = document.getElementById("telError");
const CCCDError =  document.getElementById("CCCDError");

const userLocal=JSON.parse(localStorage.getItem("users")) || [];
formDangky.addEventListener("submit",function(e){
    e.preventDefault();
    const GenderE=document.querySelector('input[name="gender"]:checked');
    if(!userNameE.value.trim()){
        userNameError.style.display = "block";
    }
    else{
        userNameError.style.display = "none";
    }
     if(!passwordE.value.trim()){
        passwordError.style.display = "block";
    }
    else{
        passwordError.style.display = "none";
    }

     if(!re_passwordE.value.trim()){
        re_passwordError.style.display = "block";
    }
    else{
        re_passwordError.style.display = "none";
    }

     if(re_passwordE.value!=passwordE.value){
        re_passwordNotsuit.style.display = "block";
    }
    else{
        re_passwordNotsuit.style.display = "none";
    }

     if(!emailE.value.trim()){
        emailError.style.display = "block";
    }
    else{
        emailError.style.display = "none";
    }

     if(!GenderE){
        GenderError.style.display = "block";
    }
    else{
        GenderError.style.display = "none";
    }

     if(!telE.value.trim()){
        telError.style.display = "block";
    }
    else{
        telError.style.display = "none";
    }

     if(!CCCD_E.value.trim()){
        CCCDError.style.display = "block";
    }
    else{
        CCCDError.style.display = "none";
    }
    if(
        userNameE.value&& 
        passwordE.value&&
        emailE.value&&
        re_passwordE.value&&
        GenderE&& 
        re_passwordE.value==passwordE.value&&
        telE.value&&
        CCCD_E.value

    ){
       const user ={
          userId: Math.ceil(Math.random() * 100000000),  
          userName: userNameE.value,
          email: emailE.value,
          password: passwordE.value,
          gender:GenderE.value,
          tel:telE.value,
          CCCD: CCCD_E.value,
        
       };
       userLocal.push(user);
       localStorage.setItem("users",JSON.stringify(userLocal));
       setTimeout(function(){
            window.location.href = "dangnhap.html";
       },1000)
       
    }

})
