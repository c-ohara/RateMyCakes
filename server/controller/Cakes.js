const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
    index: (req, res) => {
        Cake.find()
        .then(allCakes => {
            console.log("*************** allCakes = " + allCakes);
            res.json({status: true, allCakes: allCakes});
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
    create: (req, res) => {
        Cake.create(req.body)
        .then(addedCake => {
            console.log(addedCake);
            res.json({status: true, addedCake});
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
        Cake.findById(req.params.id)
        .then(currentCake => {
            console.log(currentCake);
            res.json({status: true, currentCake})
        })
        .catch(err => {
            console.log(err);
            res.json({status: false, errors: err});
        })
    },
    update: (req, res) => {
        Cake.updateOne({_id: req.params.id}, {
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
        Cake.deleteOne({_id: req.params.id})
        .then( result => {
            console.log(result);
            res.json({status: true});
        })
        .catch(err => {
            console.log(err);
            res.json({status: false, errors: err});
        })
    },
    removeId: (req, res) => {
        Cake.updateOne({_id: req.params.id}, {
            Comments: []
        })
        .then(data => {
            res.json({status: true, data});
        })
        .catch(err => {
            res.json({status: false, errors: err});
        })
    }
}