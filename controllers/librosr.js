var mongoose = require('mongoose');
var libros = mongoose.model('Libros');

//retornarn los libros de la BD
exports.findAllLibros = function(req,res){
    libros.find(function(err,variosLibros){
        if (err) res.send(500, err.mesage);

            console.log('GET/variosLibros');
                res.status(200).jsonp(variosLibros);
    });
};


exports.findById = function(req,res) {
    libros.findById(req.params.id , function(err, unLibro) {
    if(err) return res.send(500, err.mesage);

    console.log('GET /unLibro/' + req.params.id);
        res.status(200).jsonp(unLibro);

    });
};

exports.addLibro = function(req,res){
    console.log('POST');
    console.log(req.body);

    var librosagg = new libros({
        titulo: req.body.titulo,
        año: req.body.año,
        portada: req.body.portada,
        editorial: req.body.editorial,
        autor: req.body.autor,
        genero: req.body.genero
    });

    libros.save(function(err, libros){
        if(err) return res.status(500).send( err.mesage);
    res.status(200).jsonp(libros);
    });
};

exports.actualizarLibro = function(req,res) {
    libros.findById(req.params.id, function(err, unLibro){
        unLibro.titulo = req.body.petId;
        unLibro.año = req.body.año;
        unLibro.portada = req.body.portada;
        unLibro.editorial = req.body.editorial;
        unLibro.autor = req.body.autor;
        unLibro.genero = req.body.genero;

        unLibro.save(function(err){
            if(err) return res.status(500).send(err.mesage);
        res.status(200).jsonp(unLibro);    
        });
    });
};

exports.borrarLibro = function(req,res) {
    libros.findById(req.params.id, function(err,unLibro){
        libros.remove(function(err){
            if(err) return res.status(500),send(err.mesage);

    res.status(200).send();
    
        });
    });
}