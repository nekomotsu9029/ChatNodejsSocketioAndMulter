const express = require('express');
const router = express.Router();
const multer = require("multer");

//llamo mi archivo de configuracion de multer
const storage = require("../multer/storage.js");
const upload = multer({ storage: storage });

const uploadChat = upload.single('archivoMensaje')

router.get('/', (req, res)=>{
    res.render('index.html')
});

router.post('/api/photo',function(req,res){
    uploadChat(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});


module.exports = router;