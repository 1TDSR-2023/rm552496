// // var nome1 = "Petroni";
// // let nome2 = "Derick";
// // const nome3 = "Ruan";

// // if(nome1 != ""){
// //     let nome1 = "Geovana"
// // }

// // console.log(nome1)

// let botao = document.getElementById("meu-btn");
// botao.addEventListener("click", function(){
//     //Funçao matemática Math
//     //random = retorna um número aleatório entre 0 e 1
//     //floor = arredonda um numero para baixo
//     //ceil = arrendonda um numero para cima
//     //round = arredonda um número aleatóriamente
//     let r=0, g=0, b=0;
    
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);

//     this.setAttribute("style", `background-color: rgb(${r},${g},${b});`)

// });

// let frutas = ["banana", "maça", "pêssego", "laranja", "limão", "melancia"];
// console.log(frutas)
// console.table(frutas)

// //Inserir item ao final do array com método push()
// frutas.push("kiwi");
// frutas.push("pitaya");

// //Inserir item ao ínicio do array com método unshift()
// frutas.unshift("manga");

// //Remover item ao final do array com método pop()
// frutas.pop();

// //Remover item ao inicio do array com método shift()
// frutas.shift();

// //Localizar um item no array utilizando um método indexOf(nomeDoItem)
// //Obs: Retona o índice do item em encontrado
// // let indice = frutas.indexOf("laranja");
// // console.log(`indice encontrado foi: ${indice}`)
// // console.log(`indice encontrado foi: ${frutas[indice]}`)

// //Realizando uma remoção de item utilizando metodo splice()
// //O método splice() recebe dois parametros, p índice do item que será removido e a quantidade de vezes que este mesmo indíce será removido: Ex: splice(indice,1)
// //Utilize o método indexOf para buscar o indíce do item no array.

// let indice = frutas.indexOf("melancia");
// console.log(`o item encontrado no indice antes da remoção foi: ${frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(`o item encontrado no indice depois da remoção foi: ${frutas[indice]}`);

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];

//Concatenando os dois arrays em um novo array com o operador
let nr3 = [...nr1,...nr2]

nr3.forEach((nr)=>{
    console.log(`Items do array 3: ${nr} `)
});
