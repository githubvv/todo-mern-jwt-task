const {
  UserController,
  TodoController
} = require('../controllers');

const verifyToken = require('../auth/verifyToken');
const userController = new UserController();
const todoController = new TodoController();

module.exports = (app) => {

  app.post('/login', userController.login.bind(userController));
  app.get('/logout', userController.logout.bind(userController));

  app.post('/todo', verifyToken, todoController.addTodo.bind(todoController));
  app.get('/todo', verifyToken, todoController.getTodo.bind(todoController));
  app.delete('/todo/:id', verifyToken, todoController.deleteTodo.bind(todoController));

  app.use((req, res) => {
    res
      .status(404)
      .send('Sorry can\'t find that!');
  });

  app.get('*', (req, res) => res
    .status(200)
    .send({
      message: 'Welcome to the beginning of nothingness.',
    }));
};
