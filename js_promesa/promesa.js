function sumarnumero(numero){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero +1);
        },800)
    })
    return promesa;
}

sumarnumero(5).then(nuevoNumero=>{
    sumarnumero(nuevoNumero).then(nuevoNumero2=>{
        console.log(nuevoNumero2)
    });
});