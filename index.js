const http = require('http'); // importing http module


const hostname = '127.0.0.1'; //host IP
const port = 3000; // PORT SERVER RUNS ON AND IT CAN BE CHANged

// the code uses the create server method of the http module to create a new web server.
const server = http.createServer((rer, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});
// Listens to http request sent to port 3000
server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

//the primary purposde of the backend server
//in this example is to offer raw data in json format to frontend