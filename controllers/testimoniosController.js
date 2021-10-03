import repository from '../repositories/testimoniosRepository.js'

export function home(req, res){ //Controlador
    
    repository.getAll()
    .then(function (testimonios) {
        res.render(
            "home", //Vista
            {list: testimonios} // Modelo
            )
    })
    .catch(function (err) {
        res.status(500).send(err.message)
    });
}

export function testimonio(req, res){ //Controlador
    
    repository.getAll()
    .then(function (testimonios) {
        res.render(
            "testimonio", //Vista
            {list: testimonios} // Modelo
            )
    })
    .catch(function (err) {
        res.status(500).send(err.message)
    });
}

export function exito(req, res){
    repository.create(req.body)
    .then(function(entity){
        res.render("exito", { entity })
    })
}

export default {
    home,
    testimonio,
    exito
}