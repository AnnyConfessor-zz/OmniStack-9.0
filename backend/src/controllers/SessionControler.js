//index, show, store, update and destroy
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const {name} = req.body;
        const {email} = req.body;
        const {age} = req.body;

        let user =  await User.findOne({ email });

        if(!user){
            user = await User.create({ email }); //tem que criar nome e idade tbm
        }

        return res.json(user);
    }
};