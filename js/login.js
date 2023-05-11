const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("keyup", ()=>{
    
    const lblEmail = document.querySelector("label[for='idEmail']");

    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style", "outline-color:#f00");
        lblEmail.setAttribute("style", "color:#f00");
    }else{
        inputEmail.setAttribute("style", "outline-color: #0f0");
        lblEmail.setAttribute("style", "color:#0f0");
    }

    
    // inputEmail.setAttribute("style", "outline-color: #f00")
});

const inputPass = document.querySelector("#idPass");

inputPass.addEventListener("keyup", ()=>{
    
    const lblPass = document.querySelector("label[for='idPass']");

    if(inputPass.value.length < 5){
        inputPass.setAttribute("style", "outline-color:#f00");
        lblPass.setAttribute("style", "color:#f00");
    }else{
        inputPass.setAttribute("style", "outline-color: #0f0");
        lblPass.setAttribute("style", "color:#0f0");
    }
});

const eyePass = document.querySelector(".fa");

eyePass.addEventListener("click", () =>{
    
    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type", "text");
        eyePass.setAttribute("class", "fa fa-eye-slash")
    }else{
        inputPass.setAttribute("type", "password");
        eyePass.setAttribute("class", "fa fa-eye")
    }
});