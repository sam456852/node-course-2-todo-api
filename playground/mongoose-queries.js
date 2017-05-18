const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '591d4e9d029a3e1a4b722b79';
var userId = '5918131528d8b1664adbd9a6';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((e) => {console.log(e)});

User.findById(userId).then((user) => {
  if (!user){
    return console.log('No Such User');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
