const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

User.findById('5c0be92b8655ac67b7b169a6').then((user) => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User', user);
  }).catch(e => console.log(e));

//5c0be92b8655ac67b7b169a6
// const id = '5c0f1dd234ec8a6d0e34cebc11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch(e => console.log(e));
