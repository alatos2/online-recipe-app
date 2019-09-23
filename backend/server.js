const express = require('express');
const mongoose = require('mongoose');
const recipeRoute = require('./routes/route');

const app = express();

mongoose.connect('mongodb+srv://admin:j8n3I8wZrUbWjpwI@tcluster-oprbr.mongodb.net/test', { useUnifiedTopology: true, useNewUrlParser: true })
 .then(() => {
     console.log('Connection successful');
 })
 .catch((error) => {
     console.log('Connection not successful');
     console.error(error);
 })

app.get('/', () => {
    console.log('Online Recipe App is Working!!!');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api', recipeRoute);

app.listen(process.env.PORT || 3000);