function sumarlento(numero){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
             resolve(numero +1);
             reject('sumar lento fallo');
        },800)
    })
    return promesa;
}

function sumarapido(numero){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero +1);
        },300)
    })
    return promesa;
}
function retornaTrue(){
    return true;
}
let arreglo = [sumarlento(5),sumarapido(10),true,'holaa geo',retornaTrue()];


Promise.all(arreglo)
.then(respuestas=>{
console.log(respuestas);
})
.catch(console.log);









