const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5c104f2bc87e68169fa0c566'}).then(todo => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5c104f2bc87e68169fa0c566').then(todo => {
  console.log(todo);
});
