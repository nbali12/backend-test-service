const itemsToSell = {
  'ValentinesBox': {
    contains: [
      'Red Roses Bouquet',
      'Box of chocolates',
      'Love card',
      'Womens perfume'
    ]
  },
  'BirthdayBox': {
    contains: [
      'Birthday cupcake',
      '$100 Visa Gift Card',
      'Birthday card'
    ]
  },
  'ClientGiftBox': {
    contains: [
      'Bottle of wine',
      'Fruit basket',
      'Pen'
    ]
  }
};

const orders = [
  {
    orderNumber: 1,
    orderDate: 'September-15-2023',
    lineItems: [
      {
        'BirthdayBox': {
          contains: [
            'Birthday cupcake',
            '$100 Visa Gift Card',
            'Birthday card'
          ]
          },
        'ValentinesBox': {
          contains: [
            'Red Roses Bouquet',
            'Box of chocolates',
            'Love card',
            'Womens perfume'
          ]
        }
      },
    ],
    shipTo: {
      name: 'John Smith',
      address: '100 Dundas Street East'
    }
  },
  {
    orderNumber: 2,
    orderDate: 'September-15-2023',
    lineItems: [
      {
        'ValentinesBox': {
          contains: [
            'Red Roses Bouquet',
            'Box of chocolates',
            'Love card',
            'Womens perfume'
          ]
        }
      }
    ],
    shipTo: {
      name: 'Rob Smith',
      address: '100 Queen Street East'
    }
  },
  {
    orderNumber: 3,
    orderDate: 'September-16-2023',
    lineItems: [
      {
        'BirthdayBox': {
          contains: [
            'Birthday cupcake',
            '$100 Visa Gift Card',
            'Birthday card'
          ]
        }
      },
    ],
    shipTo: {
      name: 'Dan Smith',
      address: '100 King Street East'
    }
  }
];

module.exports = {
  itemsToSell,
  orders
};
