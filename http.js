const http=require('http');
const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.write('Welcome to our homepage ');

    }
     if(req.url == '/about'){
        res.end("here is out about page");
     }
     res.end(`<h1> Oops <h1/>`);
    
})
server.listen(5000);