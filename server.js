require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./controllers/auth');
const testJwtRouter = require('./controllers/test-jwt');

const app = express();
const usersRouter = require('./controllers/users');

// below express.json()
app.use('/users', usersRouter);

// Middleware
app.use(express.json());

// Database
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

// Routes
app.use('/auth', authRouter);
app.use('/test-jwt', testJwtRouter);

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
