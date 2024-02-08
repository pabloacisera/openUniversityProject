/**debemos utilizar el servidor para modificar el dom */
const http=require('http');

const server=http.createServer((req, res)=>{
    res.end('./index.html');
});

server.listen(3000, ()=>{
    console.log('el servidor esta escuchando');
});

/**pregunta a chatgpt como hacer para que el servidor devuelva
 * el html que estamos creando...
 */