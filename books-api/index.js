require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override'); // Import the method-override package

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Set up the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const { PORT, MONGO_URI } = process.env; 

// MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

//  routes
app.get('/', (req, res) => {
  res.render('HelloWorld'); 
});

app.get('/books', (req, res) => {
  res.render('home'); 
});

// Listen on  port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
