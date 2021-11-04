function sumarnumero(numero){
    var promesa = new Promise(function(resolve, reject){
        if(numero<=2)
        {
            reject('el numero es muy alto');
        }
        setTimeout(function(){
            resolve(numero +1);
        },800)
    })
    return promesa;
}

sumarnumero(5)
.then(nuevoValor =>sumarnumero(nuevoValor))
.then(sumarnumero)
.then(nuevoNumero =>{
    console.log(nuevoNumero)

})
.catch(error =>{
    console.log('error en promesa');
    console.log(error);
});