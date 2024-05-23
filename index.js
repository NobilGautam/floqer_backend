const express = require('express');
const cors = require('cors');
const path = require('path');
const loadCSVData = require('./dataLoader');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const csvFilePath = path.join(__dirname, './salaries.csv');

let jobData = [];

loadCSVData(csvFilePath).then(data => {
  jobData = data;
}).catch(err => {
  console.error('Error loading CSV data:', err);
});

app.get('/api/salaries', (req, res) => {
  res.json(jobData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
