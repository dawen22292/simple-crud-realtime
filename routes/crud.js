var express = require('express');
var router = express.Router();
var crud = require('../models/crud');

router.get('/', function(req, res, next) {
    crud.find({},(err, crud) => {
        if (err) return next(err);
        res.json(crud);
    })
}); 

router.post('/create', function(req, res, next) {
    crud.create(req.body, function (err, crud) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(crud);
    });
});

router.get('/read/:id', function(req, res, next) {
    crud.findById(req.params.id,(err, crud) => {
        if (err) return next(err);
        res.json(crud);
    })
}); 

router.put('/update/:id', function(req, res, next) {
    crud.findByIdAndUpdate(req.params.id, req.body, function (err, crud) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.json(crud);
    });
});

router.delete('/delete/:id', function(req, res, next) {
    crud.findByIdAndRemove(req.params.id, req.body, function (err, crud) {
        if (err) return next(err);
        res.json(crud);
    });
});

module.exports = router;