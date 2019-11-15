const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');

module.exports = {
    index: (req, res) => {
        Comment.find()
        .then(allComments => {
            console.log("*************** allComments = " + allComments);
            res.json({status: true, allComments: allComments});
        })
        .catch(err => {
            console.log(err);
            let message = [];
            for (let key in err.errors) {
                message.push(err.errors[key].messages);
            }
            res.json({status: false, errors: messages});
        })
    },
    create: (req, res) => {
        Comment.create(req.body)
        .then(addedComment => {
            console.log(addedComment);
            Cake.updateOne({_id: req.params.cake}, {$push: {Comments: addedComment}})
            .then(data => {
                console.log(result);
                res.json({status: true, currentCake: data});
            })
            .catch(err => {
                res.json({status: false, errors: err});
            })
        })
        .catch(err => {
            console.log(err);
            let messages = [];
            for (let key in err.errors) {
                messages.push(err.errors[key].message);
            }
            res.json({status: false, errors: messages});
        })
    },
    show: (req, res) => {
        Comment.findById(req.body._id)
        .then(currentComment => {
            console.log(currentComment);
            res.json({status: true, currentComment})
        })
        .catch(err => {
            console.log(err);
            res.json({status: false, errors: err});
        })
    },
    update: (req, res) => {
        Comment.updateOne({_id: req.params.id}, {
            Baker: req.body.Baker,
            ImageUrl: req.body.ImageUrl
        }, { runValidators: true })
        .then(oneTask => {
            res.json({status: true, oneTask});
        })
        .catch(err => {
            let messages = [];
            for (var key in err.errors) {
                messages.push(err.errors[key].message)
            }
            res.json({status: false, errors: messages});
        })
    },
    remove: (req, res) => {
        Comment.deleteOne({_id: req.params.id})
        .then( result => {
            console.log(result);
            res.json({status: true});
        })
        .catch(err => {
            console.log(err);
            res.json({status: false, errors: err});
        })
    }

}