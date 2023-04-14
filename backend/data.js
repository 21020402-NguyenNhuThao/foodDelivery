import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nhuthao',
      email: 'nhuthaoksa@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'mon1',
      slug: 'mon1',
      category: 'food',
      image: '/img/c1.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'mon2',
      slug: 'mon2',
      category: 'food',
      image: '/img/c2.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'mon3',
      slug: 'mon3',
      category: 'food',
      image: '/img/c3.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'mon4',
      slug: 'mon4',
      category: 'food',
      image: '/img/c4.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'mon4',
      slug: 'mon4',
      category: 'food',
      image: '/img/c4.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },{
      name: 'mon4',
      slug: 'mon4',
      category: 'food',
      image: '/img/c4.png', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },

  ],
};
export default data;
