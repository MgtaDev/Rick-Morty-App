const http = require("http");
const getCharById = require("./controllers/getCharById");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes("rickandmorty/character")){

        let id = parseInt(url.substring(url.lastIndexOf("/")+1));
        
        getCharById(res, id);

    } 

}).listen(3001, "localhost")