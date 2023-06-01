const { Favorite } = require('../DB_connection');

const postFavs = async (req, res) => {
    
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return res.status(401).send("Faltan datos")
        } 
        const postedFav = await Favorite.findOrCreate({where: { id }, defaults: { id, name, origin, status, image, species, gender }});

        res.status(200).send(postedFav)
        const favList = await Favorite.findAll();

        return favList;

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { postFavs }