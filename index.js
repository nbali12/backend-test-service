const express = require('express');
const app = express();
const cors = require('cors');
const { itemsToSell, orders } = require('./orders');
const port = process.env.PORT || 3001;

app.use(cors());


app.get('/orderDates', (req, res) => {
  const orderDates = orders.map(order => order.orderDate);
  res.json(orderDates);
});

app.get('/itemsToSell', (req, res) => {
  res.json(itemsToSell);
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

app.get('/lineItemCount', (req, res) => {
  const { orderDate } = req.query;

  if (!orderDate) {
    return res.status(400).json({ error: 'Order date is required' });
  }

  const filteredOrders = orders.filter((order) => order.orderDate === orderDate);

  const boxCounts = {
    ValentinesBox: 0,
    BirthdayBox: 0,
    ClientGiftBox: 0,
  };

  filteredOrders.forEach((order) => {
    order.lineItems.forEach((lineItem) => {
      for (const boxName in lineItem) {
        if (boxCounts[boxName] !== undefined) {
          boxCounts[boxName] += 1;
        }
      }
    });
  });

  res.json({ orderDate, lineItemCounts: boxCounts });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
