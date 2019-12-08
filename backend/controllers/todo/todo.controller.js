const {ObjectID} = require('mongodb');
const {Todo} = require('../../models/todo');

class TodoController {
    constructor(){}
    addTodo (req, res) {
        const todo = new Todo(req.body);
        todo.save().then((doc) => {
            res.send(doc);
        }, (e) => {
            res.status(400).send(e);
        });
    };
    getTodo (req, res) {
            Todo.find({
                userId: req.userId
            }).then((todos) => {
                res.send({todos})
            }, (e) => {
                res.status(400).send(e);
            });
    };
    deleteTodo (req, res) {
        {
            const {id} = req.params;
            if (!ObjectID.isValid(id)) {
                return res.status(404).send();
            }
            Todo.findOneAndRemove({
                _id:id,
                userId:req.userId
            }).then((todo) => {
                if (!todo) {
                    return res.status(404).send();
                }
                res.send({todo});
            }).catch((e) => {
                res.status(400).send();
            });
        }
    }
}

module.exports = TodoController;
