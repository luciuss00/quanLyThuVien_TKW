const formLogin = document.getElementById("formLogin");
const emailortel =  document.getElementById("email/sdt");
const passwordE =  document.getElementById("password");
const emailortelError =  document.getElementById("emailortelEror");
const passwordError =  document.getElementById("passwordError");
const LoginError = document.getElementById("LoginError");
formLogin.addEventListener("submit",function(e){
    e.preventDefault();
    if(!emailortel.value.trim()){
        emailortelError.style.display = "block";
    }
    else{
        emailortelError.style.display = "none";
    }
     if(!passwordE.value.trim()){
        passwordError.style.display = "block";
    }
    else{
        passwordError.style.display = "none";
    }

    const userLocal = JSON.parse(localStorage.getItem("users")) || [];
    const findUser = userLocal.find((user)=>
        (user.email === emailortel.value||  user.tel === emailortel.value) &&
        user.password === passwordE.value
    );

    if(!findUser){
        LoginError.style.display = "block";
    }
    else{
        setTimeout(function(){
            window.location.href="trangchu.html";
            alert("Đăng nhập thành công");
        },1000)
    }
})