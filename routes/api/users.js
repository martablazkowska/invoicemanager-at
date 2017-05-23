var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var bcrypt = require('bcrypt-nodejs');
var db = mongojs('mongodb://marta:testtest@ds147789.mlab.com:47789/mbl-mean-app', ['users']);

// Get All Users
router.get('/users', function(req, res, next){
    db.users.find(function(err, tasks){
        if(err){
            res.send(err);
        }else {
            res.json(tasks);
        }
    });
});

// Get Single Task
router.get('/user/:id', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, user){
        if(err){
            res.send(err);
        }else {
            delete user.password;
            res.json(user);
        }
    });
});


// Delete Task
router.delete('/user/:id', function(req, res, next){
    db.users.remove({_id: mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.send(err);
        }else {
            res.json(task);
        }
    });
});

// Update Task
router.put('/user/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }

    if(task.title){
        updTask.title = task.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.users.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }else {
            res.json(task);
        }
    });
    }
});


module.exports = router;