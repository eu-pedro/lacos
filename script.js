var btn = document.querySelector('#btn')
btn.addEventListener('click', Contar)

// VARIÁVEIS DO INPUT
var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')
// VARIÁVEL DE RESPOSTA 
var res = document.querySelector('#res')



function Contar(){
  var i = inicio
    for(i.value; i.value <= fim.value; i.value+= passo.value){
      console.log(i.value)
      
    }
  
 
}
