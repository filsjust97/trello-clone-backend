const List = require('../models/list.model');
const Card = require('../models/card.model');
var mongoose = require('mongoose');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.getAll = function (req, res) {
    List.find().
        populate('cards').
        exec((err, list) => {
            if (err) return next(err);
            console.log("list", list);
            res.status(200).send(list);
        })
}

exports.list_create = function (req, res) {
    let list = new List(
        {
            title: req.body.title,
            cards: []
        }
    )

    req.body.cards.forEach(element => {
        list.cards.push(element);
    });

    list.save(function (err, list) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.status(201).send(list);
    })
}

exports.add_Card_Update_List = function (req, res) {
    let card = new Card(
        {
            text: req.body.text
        }
    )

    card.save(function (err, card) {
        if (err) {
            return next(err);
        }else{
            const cardID = card._id;
            List.findByIdAndUpdate(req.body._id, {$push: {cards: card._id}}, {'new': true}, (erro, list)=>{
                res.status(201).send({list, cardID});
            })
            
        }
        
    })
}