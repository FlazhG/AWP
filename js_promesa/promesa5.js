function areatriangulo(numero1){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
             resolve(numero1 /2);

            // reject('El area Es:');
        },500)
    })
    return promesa;
}

function circulo(numero){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero * numero);
        },200)
    })
    return promesa;

}
let arreglodeareas = [areatriangulo(10*5),circulo(3.1416*30),'holaa geo'];


Promise.race([areatriangulo(10*5),circulo(3.1416*30)])
.then(respuestas=>{
console.log(respuestas);
})
.catch(console.log);
