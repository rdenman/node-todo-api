// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c0af2f6cebb61623f7a3438')
  // }).toArray().then((documents) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos:', error);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('Unable to fetch todos:', error);
  // });

  db.collection('Users').find({name: 'Rob'}).toArray().then((documents) => {
    console.log('Users');
    console.log(JSON.stringify(documents, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch users:', error);
  });

  client.close();
});
