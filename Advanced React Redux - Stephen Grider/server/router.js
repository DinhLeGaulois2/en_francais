const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// by default, "passport" tries to create a session (with "cookie")
// as we are using "token" (not "cookie"), we tell passport to NOT 
// create a "session"
const requireAuth = passport.authenticate('jwt', { session: false });

const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    // Example: to get into the '/', the user MUST
    // pass (authenticated) by "<b>requireAuth</b>" first.
    // <b>If the verification is successful</b>, then the callback
    // function could be executed
    app.get('/', requireAuth, function (req, res) {
        res.send({ hi: 'there' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}