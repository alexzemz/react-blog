const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AleksandrZemzulin:reactBlog@react-blog-kvfn7.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('db connected')).catch(err => console.error(err))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(5000);