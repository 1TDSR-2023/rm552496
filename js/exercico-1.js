
let botaoBg = document.getElementById("btn-bg");
botaoBg.addEventListener("click", function(){

    let r=0, g=0, b=0;
    
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    let display = document.body

    display.setAttribute("style", `background-color: rgb(${r},${g},${b});`)

});

let imgBtb = document.getElementById("img-btn");
imgBtb.addEventListener("click", function(){
    let img = document.getElementById("img");

    
    let imgUrl = img.setAttribute("src", ` `)

});