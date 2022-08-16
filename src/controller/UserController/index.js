const user = require('../../models/user');
const userController = {
    async createUser(req, res){
        const bodyData = req.body;

        try{
            const newUser = await user.create(bodyData);

            return res.status(200).json(newUser);
        } catch(err){
            return res.status(400).json(err);
        }
    },

    async getUsers(req, res){

        try{
            const users = await user.find();
            return res.status(200).json(users);
        } catch(err){
            return res.status(400).json(err);
        }
    },

    async getUserById(req, res){
        const {user_id} = req.params;

        try{
            const users = await user.findById(user_id);
            return res.status(200).json(users);


        } catch(err){
            return res.status(400).json(err);
        }

    }
}

module.exports = userController;