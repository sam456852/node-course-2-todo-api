const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove({_id: '591d59b84b95071b30b8f097'}).then((todo) => {
//
// });

// Todo.findByIdAndRemove('591d59b84b95071b30b8f097').then((todo) => {
//   console.log(todo);
// });
