let aspirante = {
    ida: 17,
    nombre: "Cruz",
    apellido: "Cruz",
    cp: 5000,
    idv:5,
    sexo: "M",
    salario: 50000,
    telefono: 7228569854,
    idm: 1,
    foto: "fotos/mazda1.jpg",
    comentario: "HolaaProfesor!!"
}
fetch('http://127.0.0.1:8000/api/modificaaspirante',{
    method:'POST',
    mode:'cors',
    body: JSON.stringify(aspirante),
    headers:{
        'Accept': 'aplication/json',
        'Content-Type': 'aplication/json'
    }
})
.then(resp=>resp.json())
.then(console.log)
.catch(console.error);