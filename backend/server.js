// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/al-pay');

app.use('/pay', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
