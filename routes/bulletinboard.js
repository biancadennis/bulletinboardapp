var express = require('express');
var wish = require('../models/wishes')
var router = express.Router();

// //Index.
router.get('/', function(request, response){
    wish.findAll().then(function(wishes) {
        response.render('index',{
            wishes: wishes
        });
    });
});
//list of wishes
router.get('/wishes', function(request, response){
    wish.findAll().then(function(wishes){
    response.render('wishes',{
        wishes: wishes
         });
    });
});
//new
router.get('/newwish', function(request, response) {
    response.render('new');
})
//create
router.post('/', function (request, response){
    wish.create({
        title: request.body.title,
        body: request.body.body
    }).then(function(wish){
        response.redirect(wish.url);
    })
})

//Show
router.get('/:id', function(request, response) {
    wish.findOne({
        where: {
            id: request.params.id
        }
    }).then(function(wish){
        response.render('show',{
            wish:wish
        })
    })
})
//why is this neccessary?
module.exports = router;