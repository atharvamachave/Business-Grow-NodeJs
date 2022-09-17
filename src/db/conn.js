const mongoose = require('mongoose');

// Creating a database
mongoose
  .connect('mongodb://localhost:27017/MyNode')
  .then(() => {
    console.log('Connection Successful...');
  })
  .catch((error) => {
    console.log(error);
  });
