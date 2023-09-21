const express = require('express');
const app = express();
const cors = require('cors');
const { itemsToSell, orders } = require('./orders');
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
  const jsonResponse = {
    message: 'Hello, Express.js!',
    date: new Date()
  };

  res.json(jsonResponse);
});

app.get('/order-dates', (req, res) => {
  const orderDates = orders.map(order => order.orderDate);
  res.json(orderDates);
});

app.get('/orders', (req, res) => {
  const orderDateParam = req.query.orderDate;

  if (!orderDateParam) {
    return res.status(400).json({ error: 'Order date is missing in query parameters' });
  }

  const filteredOrders = orders.filter((order) => order.orderDate === orderDateParam);

  if (filteredOrders.length === 0) {
    return res.status(404).json({ error: 'No orders found for the specified date' });
  }

  res.json(filteredOrders);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
