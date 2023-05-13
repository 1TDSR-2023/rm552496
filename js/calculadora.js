//

function insereNumeroNoVisor(botao, visor){
    if(visor.value.slice(-1) === botao.value){
        return visor.value;
    }
    else{
        visor.value += botao.value;
    }

}

//Deafio 2 
// Utilizando a funçao eval(exp) calcule o resultado do visor
//Atrele o evento ao botão de igual
//Cire uma funçao para executar esse


let resultado = (visor)=>{
    visor.value = eval(visor.value);
}

//Impeça a entrada de mais de uma vez do operador

let impedirRepeticao = (visor, botao)=>{
    visor.value -= botao.value
}