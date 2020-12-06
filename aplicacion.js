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

app.listen(3000,function(){
    console.log("servidor corriendo en el puerto: 3000");

});