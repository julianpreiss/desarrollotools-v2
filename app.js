import express from 'express'
import routerAPI from './routers/testimoniosRoutersAPI.js'
import routerWeb from './routers/testimoniosRouterWeb.js'

const app = express();

// Directorio de los archivos estáticos
app.use(express.static('public'))

//Directorio de las vistas
app.set('views', './views')

//Sistema de templates a utilizar
app.set('view engine', 'ejs')

// Parse Body - JSON
app.use(express.json());
// Parse Body - URL ENCODED
app.use(express.urlencoded({extended: true}))

// Routers a utilizar con express
app.use(routerAPI);
app.use(routerWeb);

app.listen(80, function () {
    console.log("El servidor está activo")
})