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

    //READ ONE
    findOne: (req,res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //UPDATE
    update: (req,res) => {
        User.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, runValidators: true
        })
            .then((updatedUser) => {
                res.json(updatedUser)
            })
            .catch(err => res.json({message: "error res", error : err}))
    },

    //DELETE
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: "error res", error : err}))
    }

}