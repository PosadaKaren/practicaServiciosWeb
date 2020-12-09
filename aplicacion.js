var express = require("express"), //usamos express para crear el servidor
    app = express(),
    bodyParser  = require("body-parser"), //para parsear json
    methodOverride = require("method-override"); //implementar los métodos http
    mongoose = require('mongoose');

//para la base
mongoose.connect('mongodb://localhost/libros', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//el modelo de la BD y elcontrolador
var models = require('./model/Libros')(app,mongoose);
var librosCtrl = require('./controllers/librosr');

var router = express.Router();
router.get('/', function(req,res){
    res.send('funciono :)'); //petición get del navegador
});
app.use(router);


// rutas de la api

var librosr = express.Router();

librosr.route('/librosr')
    .get(librosCtrl.findAllLibros)
    .post(librosCtrl.addLibro);

librosr.route('/librosr/:id')
    .get(librosCtrl.findById)
    .put(librosCtrl.actualizarLibro)
    .delete(librosCtrl.borrarLibro);

app.use('/api',librosr);

//comenzar el servidor
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
});
