const express = require('express');
const cors = require('cors');
const errorHandler = require("./middleware/errorHandler");// Added after creating middleware


const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Student Management API is Running...');
});
app.use(errorHandler);
module.exports = app;