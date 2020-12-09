exports = module.exports = function(app, mongoose) {


    var schemaLibro = new mongoose.Schema({ //vamos a usar MongoDB y esta sera la info de los Libros
        titulo: {type: String},
        año: {type: Number},
        portada: {type: String},
        editorial: {type: String},
        autor: {type:String},
        genero: {type: String, enum:
        ['Academico' , 'Policial' ,'Ciencia ficcion' , 'Romance', 'Fantasia']}
    });

    mongoose.model('Libros',schemaLibro);

};
