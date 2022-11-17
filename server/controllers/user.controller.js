const User = require("../models/user")

module.exports = {

    //READ ALL
    findAll: (req,res) => {
        User.find()
            .then(allUsers => res.json({users: allUsers}))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //CREATE
    create: (req,res) => {
        User.create(req.body)
            .then(newUser => res.json(newUser))
            .catch(err => res.json({message: "error res", error : err}))
    },
    login: async (req, res) => {
        try{
            const user = await User.findOne({email: req.body.email})
            
            if (user === null) {
                // user not found in users collection
                return res.status(400).json({ msg: 'Email does not exist' });
            }
                //compare passwords
            if(req.body.password != user.password){
                return res.status(400).json({ msg: 'Password does not match' });
            }
            {
            console.log("SUCCESS")
            res.status(200).send({successfullLogin:true})
            }
                
        }
        catch (err) {
            console.error("loginerr",err.message);
            res.status(500).send('Server error');
        }
    }
}