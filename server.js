const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const uri = process.env.MONGO_URI;

// Connect and configure to MongoDB Database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(err));

// Create Mongoose Schema



// Connect and configure Express
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// Import Express routes
require('./routes')(app);


// Start Express Server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
})