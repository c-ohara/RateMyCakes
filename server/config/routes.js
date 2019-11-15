const Comments = require('./../controller/Comments');
const Cakes = require('./../controller/Cakes');

module.exports = (app) => {
    app.get('/cakes', Cakes.index);
    app.get('/cakes/:id', Cakes.show);
    app.post('/cakes', Cakes.create);
    app.put('/cakes/:id', Cakes.update);
    app.delete('/cakes/:id', Cakes.remove);
    app.patch('/cakes/comments/:id', Cakes.removeId)
    app.get('/comments', Comments.index);
    app.get('/comments/:id', Comments.show);
    app.post('/comments/:cake', Comments.create);
    app.put('/comments/:id', Comments.update);
    app.delete('/comments/:id', Comments.remove);
}