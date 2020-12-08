var mogoose = require('mogoose');
schema = mongoose.Schema;

var schemaLibro = new Schema({   //vamos a usar MongoDB y esta sera la info de los libros
titulo: {type: String},
año: {type: Number},
portada: {type: String},
editorial: {type: String},
autor: {type:Array},
genero: {type: String, enum:
['Academico' , 'Policial' ,'Ciencia ficcion' , 'Romance', 'Fantasia']}
});

module.exports = mongoose.model('Libros',schemaLibro);


