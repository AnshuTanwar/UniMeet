if(process.env.NODE_ENV != "production") {
    require('dotenv').config(); 
}
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');                          
const ejsMate = require('ejs-mate');
const Course = require('./models/course');

const app = express();  
 
    app.engine('ejs', ejsMate);                  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/edutech'
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Home page route
app.get('/', (req, res) => {
    res.render('mains/home');
});

// Render login page
app.get('/login', (req, res) => {
    res.render('user/login', { title: 'Login' });
});

// Render signup page
app.get('/signup', (req, res) => {
    res.render('user/signuph', { title: 'Sign Up' });
});

//show courses 
app.get('/courses', async(req, res) => {
    const course = await Course.find({});
    res.render('mains/courses.ejs', { course });
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
