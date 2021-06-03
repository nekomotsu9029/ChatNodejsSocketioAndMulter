const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'public', 'uploads'),
    filename: (req, file, cb) =>{
        var nameImg = file.originalname;
        cb(null, nameImg);
    }
});


module.exports = storage;