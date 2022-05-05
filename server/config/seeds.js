const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Mask',
      description:
        'stylish mask for anyone!',
      image: 'mask.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 500
    },
    {
      name: 'Laptop Sleeve',
      description:
        'stylish laptop sleeve that protects your laptop!',
      image: 'laptop-sleeve.jpg',
      category: categories[0]._id,
      price: 26.99,
      quantity: 500
    },
    {
      name: 'Iphone Case',
      category: categories[1]._id,
      description:
        'Stylish Iphone case that protects your phone!',
      image: 'iphone-case.jpg',
      price: 9.99,
      quantity: 234
    },
    {
      name: 'Unisex Black Long Sleeve Shirt',
      category: categories[1]._id,
      description:
        'Stylish long sleeve shirt that is comfortable!',
      image: 'Unisex-long-sleeve-shirt.jpg',
      price: 16.99,
      quantity: 50
    },
    {
      name: 'Unisex White Long Sleeve',
      category: categories[2]._id,
      description:
        'Stylish long sleeve shirt that is comfortable!',
      image: 'white-shirt.jpg',
      price: 16.99,
      quantity: 50
    },
    {
      name: 'Youth T-shirt',
      category: categories[1]._id,
      description:
        'Confortable youth T-shirt!',
      image: 'youth-shirt.jpg',
      price: 14.99,
      quantity: 100
    },
 
    {
      name: 'Mug',
      category: categories[2]._id,
      description:
        'Great mug for coffee or whatever!',
      image: 'mug.jpg',
      price: 8.99,
      quantity: 30
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
