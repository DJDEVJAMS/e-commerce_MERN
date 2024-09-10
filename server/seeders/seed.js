const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // Import bcrypt for hashing passwords
const User = require('../models/User');
const Task = require('../models/Task');
const db = require('../config/connection');

// Seed data for users and tasks
const userSeeds = [
  {
    username: 'customer1',
    email: 'customer1@example.com',
    password: 'password123',
    role: 'customer',
  },
  {
    username: 'business1',
    email: 'business1@example.com',
    password: 'password123',
    role: 'business',
  },
  {
    username: 'customer2',
    email: 'customer2@example.com',
    password: 'password123',
    role: 'customer',
  },
  {
    username: 'business2',
    email: 'business2@example.com',
    password: 'password123',
    role: 'business',
  },
];

// Task seeds
const taskSeeds = [
  {
    title: 'Fix my leaky faucet',
    description: 'Looking for a plumber to fix a leaky faucet in my kitchen.',
    postedBy: '', 
  },
  {
    title: 'Paint my living room',
    description: 'Looking for a painter to paint my living room. Paint provided.',
    postedBy: '', 
  },
];

// Function to hash passwords before inserting users
const hashPasswords = async (users) => {
  return Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10); // Hash password
      return { ...user, password: hashedPassword };  // Return user with hashed password
    })
  );
};

db.once('open', async () => {
  try {
    // First, delete any existing data
    await User.deleteMany({});
    await Task.deleteMany({});
    console.log('Existing data removed');

    // Hash the passwords in userSeeds before inserting into the database
    const usersWithHashedPasswords = await hashPasswords(userSeeds);

    // Add users to the database
    const createdUsers = await User.insertMany(usersWithHashedPasswords);
    console.log('Users seeded:', createdUsers);

    // Assign task ownership to the first customer we created
    taskSeeds[0].postedBy = createdUsers.find(user => user.role === 'customer')._id;
    taskSeeds[1].postedBy = createdUsers.find(user => user.role === 'customer')._id;

    // Add tasks to the database
    await Task.insertMany(taskSeeds);
    console.log('Tasks seeded');

  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
});
