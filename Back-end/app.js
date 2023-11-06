const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Parse JSON in the request body
app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb+srv://traveller:Manoj123@traveller.ots9ysb.mongodb.net/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the bookRoutes for /api/books
app.use('/api/books', bookRoutes);

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
