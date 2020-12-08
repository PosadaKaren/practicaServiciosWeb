var express = require("express"), //usamos express para crear el servidor
    app = express(),
    bodyParser  = require("body-parser"), //para parsear json
    methodOverride = require("method-override"); //implementar los métodos http
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req,res){
    res.send('funciono :)'); //petición get del navegador
});

app.use(router);

mongoose.connect('mongodb://localhost/Libros', function(err,res) {
    if(err){
        console.log('Error: F la conexión ' + err);
    }
    app.listen(3000,function(){
        console.log('Corriendo en el puerto 3000');
    });
});


// rutas de la api
var librosCtrl = require('./controllers/librosr');
var librosr = express.Router();

librosr.route('/librosr')
    .get(librosCtrl.findAllLibros)
    .post(librosCtrl.addLibro);

librosr.route('/librosr/:id')
    .get(librosCtrl.findById)
    .put(librosCtrl.actualizarLibro)
    .delete(librosCtrl.borrarLibro);

app.use('/api',librosr);
