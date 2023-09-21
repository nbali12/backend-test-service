const express = require('express');
const app = express();
const { itemsToSell, orders } = require('./orders');
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  const jsonResponse = {
    message: 'Hello, Express.js!',
    date: new Date()
  };

  res.json(jsonResponse);
});

app.get('/items-to-sell', (req, res) => {
  res.json(itemsToSell);
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
