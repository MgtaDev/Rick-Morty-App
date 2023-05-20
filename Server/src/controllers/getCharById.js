const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const {id} = req.params;

    axios.get(`${URL}/${id}`)
    .then(response => response.data)
    .then(({id, status, name, species, origin, image, gender}) => {
        if(name){
            const character = {
                id, 
                status, 
                name, 
                species, 
                origin, 
                image, 
                gender
            };

            return res.json(character);
        };
        return res.status(404).send('Not fount');
    })
    .catch(error => res.status(500).send(error.message));
    
};

module.exports = {getCharById};