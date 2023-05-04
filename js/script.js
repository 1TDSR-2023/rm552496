// var nome1 = "Petroni";
// let nome2 = "Derick";
// const nome3 = "Ruan";

// if(nome1 != ""){
//     let nome1 = "Geovana"
// }

// console.log(nome1)

let botao = document.getElementById("meu-btn");
botao.addEventListener("click", function(){
    //Funçao matemática Math
    //random = retorna um número aleatório entre 0 e 1
    //floor = arredonda um numero para baixo
    //ceil = arrendonda um numero para cima
    //round = arredonda um número aleatóriamente
    let r=0, g=0, b=0;
    
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    this.setAttribute("style", `background-color: rgb(${r},${g},${b});`)

});
