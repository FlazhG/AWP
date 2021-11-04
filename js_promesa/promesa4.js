function areatriangulo(numero1){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
             resolve(numero1 /2);

            // reject('El area del triangulo  es:');
        },800)
    })
    return promesa;
}

function circulo(numero){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero * numero);
        },300)
    })
    return promesa;

}
let arreglodeareas = [areatriangulo(15*10),circulo(3.1416*50),'holaa IDGS!'];


Promise.all(arreglodeareas)
.then(respuestas=>{
console.log(respuestas);
})
.catch(console.log);

