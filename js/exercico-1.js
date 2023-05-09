//Botão da balada
let botaoBg = document.getElementById("btn-bg");
botaoBg.addEventListener("click", function(){

    let r=0, g=0, b=0;
    
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    let display = document.body

    display.setAttribute("style", `background-color: rgb(${r},${g},${b});`)

});

//Manipulação da Imagem
let aux = 0;

let imgBtb = document.getElementById("img-btn");
imgBtb.addEventListener("click", function(){
    if(aux > 4) 
    aux = 0;
    let img = document.getElementById("img");
    

    const imgArray = ["./img/lobo1.jpg", "./img/lobo2.jpg", "./img/lobo3.jpg","./img/lobo4.jpg", "./img/lobo5.jpg", "./img/lobo6.jpg"];

    
    let imgUrl = img.setAttribute("src", `${imgArray[aux]}`);
    aux++;

});

//Ocultar elemento
let hideBtn = document.getElementById("btn-hide-img");
hideBtn.addEventListener("click", function(){
    
    let div = document.getElementById("img-div");
    
    if(div.style.display === "none"){
        div.style.display = "block";
    }
    else{
        div.style.display = "none";
    }

}); 

//Inserir items na lista

let btnList = document.querySelector("#btn-list");
let txt = document.querySelector("#idTxt");
const list = document.querySelector("#idList");

btnList.addEventListener("click", function(){
    let value = txt.value;
    const newItem = document.createElement("li");
    newItem.innerText = value;
    list.appendChild(newItem);
    txt.value = "";
})

//Exibir mensagem em elemento

let btnTitle = document.getElementById("btn-title");
let title = document.getElementById("idTitle");

btnTitle.addEventListener("click", ()=>{
    if(title.textContent === ""){
        title.textContent = "Alê melhor professor";
    }
    else{
        title.textContent = null;    
    }
});