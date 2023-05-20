if(localStorage.getItem("token")){
    const elementoBemVindo = document.querySelector("#welcome");

    //Recuperando objeto user-validado do LocalStorage
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;

    const botaoSair = document.querySelector("#btnSair");
    
    botaoSair.addEventListener("click", ()=>{
        localStorage.removeItem("user-validado");
        localStorage.removeItem("token");
        window.location.href = "../login.html";
    });

}else{
    alert("Você só pode acessar esse conteúdo se estiver logado");
    window.location.href = "../login.html";
}