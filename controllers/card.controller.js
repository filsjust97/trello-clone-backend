const Card = require('../models/card.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.card_create = function (req, res) {
    let card = new Card(
        {
            text: req.body.text
        }
    )

    card.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).send('Card Created Successfully');
    })
}

exports.getAll = function (req, res) {
    Card.find((err, card) => {
        if(err) return next(err);
        res.status(200).send(card);
    })
}