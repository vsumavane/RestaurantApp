const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const Food = require('./models/food');

mongoose.connect('mongodb://localhost/restaurantDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
