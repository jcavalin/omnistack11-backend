const connection = require('../database/connection');
<<<<<<< HEAD
const generateUniqueId = require('../utils/generateUniqueId');
=======
const crypto = require('crypto');
>>>>>>> 8f8fdd3882a45cf059ffc8f1ba2d6f7250989c3f

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    async create (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
<<<<<<< HEAD
        const id = generateUniqueId();
=======
        const id = crypto.randomBytes(4).toString('HEX');
>>>>>>> 8f8fdd3882a45cf059ffc8f1ba2d6f7250989c3f

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({ id });
    },
};