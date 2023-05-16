const http = require("http");
const data = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;

    if(url.includes("rickandmorty/character")){

        let id = parseInt(url.substring(url.lastIndexOf("/")+1));
        let response = data.find(character => character.id === id);
        res.end(JSON.stringify(response));
        
    } 

}).listen(3001, "localhost")