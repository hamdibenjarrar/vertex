const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Working Hours Middleware
const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  const isWorkingDay = day >= 1 && day <= 5; // Monday to Friday
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWorkingDay && isWorkingHour) {
    next();
  } else {
    res.render('closed', {
      title: 'We\'re Closed',
      currentPage: req.path
    });
  }
};

// Apply working hours middleware to all routes
app.use(checkWorkingHours);

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
    currentPage: req.path
  });
});

app.get('/services', (req, res) => {
  res.render('services', {
    title: 'Our Services',
    currentPage: req.path
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
    currentPage: req.path
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});