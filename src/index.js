const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

const routes = require('./routes');
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database'));

app.use(express.json());
app.use(cors());
app.use(routes);




app.listen('6497', () => console.log('Server is running'));