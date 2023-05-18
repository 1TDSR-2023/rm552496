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




// //Objeto
// const usuario1 = {
//     nomeCompleto : "José das Couves",
//     emailUsuario: "lucas@email.com",
//     senhaUsuario: "123456"

// }

// const usuario2 = {
//     nomeCompleto : "Juan Pelego",
//     emailUsuario: "juan@email.com",
//     senhaUsuario: "123456"

// }

//Lista de usuários
let listaDeUsuarios = [
    {
        nomeCompleto: "José das Couves",
        emailUsuario: "lucas@email.com",
        senhaUsuario: "123456"
    },
    {
        nomeCompleto: "Juan Pelego",
        emailUsuario: "juan@email.com",
        senhaUsuario: "123456"
    },
    {
        nomeCompleto: "Caio Tulipa",
        emailUsuario: "tulipa@email.com",
        senhaUsuario: "123456"
    },
    {
        nomeCompleto: "Derick Gouvea",
        emailUsuario: "dede@email.com",
        senhaUsuario: "123456"
    },
    {
        nomeCompleto: "Matheuzim Danado",
        emailUsuario: "mateu@email.com",
        senhaUsuario: "123456"
    },
    {
        nomeCompleto: "Leunardo Camacho",
        emailUsuario: "lelu@email.com",
        senhaUsuario: "123456"
    }
];


const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{
    
    //Criando um objeto de validação
    let userValidado = {
        emailUsuarioValidado : inputEmail.value,
        senhaUsuarioValidado : inputPass.value
    }
    
    //Criando uma iteração com a lista de objetos para realizar a validação
    // com o usuarioValidado
    try{
        listaDeUsuarios.forEach((usuario) =>{
            //Realizando a validaçao
            //Comparando cada objeto da lista com o objeto montado com os dados 
            //que vieram do formulario

            if(userValidado.emailUsuarioValidado == usuario.emailUsuario && userValidado.senhaUsuarioValidado == usuario.
                senhaUsuario){
                    userValidado = usuario;
                    throw "VALIDADO";
            }
        });

        throw "SENHA OU EMAIL INVALIDO";
        
    }catch(msg){

        const msgStatus = document.querySelector("#msgStatus");

        if(msg == "VALIDADO"){
            msgStatus.setAttribute("style", "color: #00ff00");
            msgStatus.innerHTML = `<span><strong>Usuário: ${userValidado.nomeCompleto} Login efetuado com sucesso!</strong></span>`

            //Redirect
            setTimeout(() =>{
                window.location.href = "../home.html"
            }, 3000);
        }else{
            msgStatus.setAttribute("style", "color: #ff0000");
            msgStatus.innerHTML = "<span><strong>Email ou senha inválidos!</strong></span>"
        }
    }

});
