module.exports = function (io){
    io.on('connection', socket => {

        const nombreSocketReceptor = 'socketServer';
        const nombreSocketEmisor = 'socketClient';

        socket.on(nombreSocketReceptor, function (mensajeTexto, nombreArchivo){

            console.log('entro al socket del server')

            io.sockets.emit(nombreSocketEmisor, mensajeTexto, nombreArchivo);
        
        });

    });
}