// const user = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
    async store(req, res) {
        // const { filename } = req.file;
        // const { username, idade, parentesco } = req.body;
        // const { user_id } = req.headers;
        return res.json({ ok: true });

        // const user = await user.findById(user_id);

        // if(!user){
        //     return res.status(400).json({ error: 'User does not exists '})
        // }

        // const spot = await Spot.create({ //pq n ta sendo usado?
        //     user: user_id,
        //     thumbnail: filename,
        //     username,
        //     idade,
        //     parentesco
        // });

        // return res.json({ ok: true });
    }
};