const User = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
    async index(req, res) {
        const { cidade } = req.query;

        const spots = await Spot.find({ cidades: cidade });

        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, cidades, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não existe' })
        }

        console.log(req.body);
        console.log(req.file);

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            cidades: cidades.split(',').map(cidades => cidades.trim()),
            price
        })

        return res.json(spot);

    }
};