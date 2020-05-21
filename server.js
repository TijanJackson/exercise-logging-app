const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const authRoutes = require('./routes/auth.js');
const passportSetup = require('./config/passport');

const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(cookieSession({ maxAge: 24 * 60 *60 * 1000, keys: [keys.session.cookieKey]}));
/*In an Express-based application, passport.initialize() middleware is required to initialize Passport. 
If your application uses persistent login sessions, passport.session() middleware must also be used. */
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// declares the route that deals with the exercises crud operations
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// utilizes the route that deals with the exercises crud operations
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
