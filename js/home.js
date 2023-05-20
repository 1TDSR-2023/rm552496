const elementoBemVindo = document.querySelector("#welcome");

//Recuperando objeto user-validado do LocalStorage
const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;