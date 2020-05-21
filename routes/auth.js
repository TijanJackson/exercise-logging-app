/* In this file we create route handlers for all our routes related to authentication.
By default, if authentication fails, Passport will respond with a 401 Unauthorized status, and any additional route handlers will not be invoked. 
If authentication succeeds, the next handler will be invoked and the req.user property will be set to the authenticated user.
Note: Strategies must be configured prior to using them in a route. See /config/passport.js to see how we have configured the Google strategy.
The calls to passport.authenticate in this file won't work if you done require the config file (const passportSetup = require('./config/passport');)
and call app.use(passport.initialize()); in app.js
 */
const router = require('express').Router();
const passport = require('passport');

// changed the '/login' to '/'
// the changed '/' to 'http://localhost:3000'
router.get('/', passport.authenticate('google', {scope: ['profile']}));

//This path must match the redirect URI configured on Google's Developer console for this app
router.get('/login/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:3000/exercise');
    // http://localhost:3000/
});

module.exports = router;