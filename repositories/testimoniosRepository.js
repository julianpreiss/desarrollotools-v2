import fs from 'fs';

//agregamos el async porque lo que está devolviendo la función es una promesa

export async function getAll() {
    return fs.promises.readFile('./data/testimonios.json')
    .then(function (data) {
        const testimonios = JSON.parse(data);
        return testimonios.filter(function(elemento){
            return elemento.deleted != true;
        });
    })
} 

//En JavaScript, un objeto es un entidad(entity) independiente con propiedades y tipos
export async function create(entity){ 
    return fs.promises.readFile('./data/testimonios.json')
    // si el archivo se pudo leer, el then toma la respuesta
    .then(function (data) {
        const testimonios = JSON.parse(data);

        entity.id = testimonios.length + 1;

        entity.publico = false;

        testimonios.push(entity);

        return fs.promises.writeFile('./data/testimonios.json', JSON.stringify(testimonios));
        
    })
    .then(function(){
        return entity
    })
}

export default {
    getAll,
    create
}