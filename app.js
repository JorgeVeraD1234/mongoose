


const mongoose = require('mongoose')

const url_db = 'mongodb://localhost:27017/utma'

mongoose.connect(url_db)

    .then(() => { console.log('Exito') })

    .catch((err) => { console.log('Error') })

const alumnos_esquema = new mongoose.Schema({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    numerotel: {
        type: Number
    }
})

const alumnos = new mongoose.model('tabla de registro', alumnos_esquema)

alumnos.create(
    {
        name: 'jesus',
        apepat: 'salazar',
        numerotel: 12345678
    }
)














