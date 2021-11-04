let aspirante={
   
    nombre: 'beatriz',
    apellido: 'martinez'
}



fetch('https://reqres.in/api/altaaspirante',{
    method:'post',
    body:JSON.stringify(aspirante),
    headers:{
        'Content.Type': 'application/json'
    }
})
.then(resp=>resp.json())
.then(console.log)
.catch(console.error());