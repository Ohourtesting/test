const express = require('express');
const mongoose = require('mongoose');
const Hello = require('./server/model/hellomodel');
const app = express();



mongoose.connect('mongodb://localhost/myapp', () => {
	console.log("mongoose connected");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/hello', (req, res) => {
	Hello.create({title: "Soo", poop: true, age: 21})
	.then(data => {res.json(data)})
	.catch((err) => {res.end(err)})
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
