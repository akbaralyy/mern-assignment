require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const initRoutes = require('./routes/init');
const transactionRoutes = require('./routes/transactions');
const statisticsRoutes = require('./routes/statistics');

const barChartRoutes = require('./routes/barChartRoutes');
const pieChartRoutes = require('./routes/pieChartRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.use('/api/init', initRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/statistics', statisticsRoutes);
app.use('/api/bar-chart', barChartRoutes);
app.use('/api/pie-chart', pieChartRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));