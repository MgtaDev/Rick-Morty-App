const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email.length || !password.length){
            return res.status(400).send("Faltan datos")
        };
    
        const createdUser = await User.findOrCreate({
            where: {
                email,
                password
            }
        });
    
        return res.status(200).json(createdUser); 
    } catch (error) {
        return res.status(500).send(error.message)
    }
    
}

module.exports = {postUser};