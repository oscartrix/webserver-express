const express = require('express');
const app = express();

const hbs = require('hbs');

// como solo son funciones que se ejecutan no necesitamos exportar ni definirla como variable.
// Simplemente ejecutamos el require
require('./hbs/helpers');

const port = process.env.PORT || 3000;


//Para servir una pagina web de una carpeta publica

app.use(express.static(__dirname + '/public'));

//Express HBS engine

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//por cada petición al servidor hay que poner una nueva instancia
app.get('/', (req, res) => {
    //hbs

    res.render('home', {
        //mando un objeto con el nombre de las variables a renderizar

        nombre: 'oscar valenzueLa',
        //  anio: new Date().getFullYear()


    });

});

app.get('/about', (req, res) => {
    res.render('about')

});

app.get('/data', (req, res) => {
    res.send('Hello Data')

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port }`);
});