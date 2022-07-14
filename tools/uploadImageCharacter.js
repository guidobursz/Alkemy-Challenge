const multer = require('multer');

//la variable storage es para definir dónde vamos a guardar el file subido
const storage = multer.diskStorage({
    // destination: donde vamos a guardar el archivo
    destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../uploads/pictures`//desde donde estoy hacia la carpeta
    //en el cb pasamos como primer argumento, un error de haber, y en el segundo un string que sería la ruta/directorio de destino
    cb(null, pathStorage)
    },
    // Vamos a modificar el nombre del archivo para que no se pueda reescribir
    filename: function (req, file, cb) {
        // primero obtener la extensión, dividiendo el nombre del archivo por los puntos “.” que tenga, siempre el último elemento del array va a ser la extensión
        const ext = file.originalname.split(".").pop();
        //Determinó el nombre con el que se va a guardar el archivo en la carpeta del proyecto
        const filename = `character-${Date.now()}.${ext}`; // Ej: file-1234123.jpg
        cb(null, filename)
        }
});

const uploadCharacterImage = multer({ storage: storage });

module.exports = uploadCharacterImage;