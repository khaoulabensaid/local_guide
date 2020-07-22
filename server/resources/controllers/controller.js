

var User = require('../models/model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.signup = (req, res, next) => {
    console.log(req.body)
    console.log(req.body.email)
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                fullName: req.body.fullName,
                password: hash,
                role: req.body.role
            });
            console.log(user)
            user.save()
                .then(() => res.status(201).json({ message: 'User has been created !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User NOT FOUND !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Invalid password !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};