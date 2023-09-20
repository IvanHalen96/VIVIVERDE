/*var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});


var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 8000; // you can use any port
app.listen(port);
console.log('server on' + port);
*/
var express = require('express');
var app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Ruta para otra página
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Ruta para otra página
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
  });

// Ruta para una página dinámica usando EJS
app.get('/pagina-dinamica', (req, res) => {
  // Aquí puedes pasar datos a la vista si es necesario
  res.render('pagina-dinamica', { titulo: 'Página Dinámica' });
});

// Configuración del servidor estático
app.use(express.static(__dirname + '/public'));

// Puerto de escucha
var port = process.env.PORT || 8000;
app.listen(port);
console.log('Servidor en ejecución en el puerto ' + port);
