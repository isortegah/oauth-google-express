/**
 * Created by ISORTEGAH on 10/02/2017
 */
module.exports = function(app , express) {
    app.set('views', __dirname + './../views');
	app.set('view engine', 'ejs');

    app.use('/', require('./../server/controllers/HomeController'));
    app.use('/auth/google',require('./../server/controllers/GoogleController'));

    app.use( '/app' , isLoggedIn , express.static('app') );
    return app;
}

function isLoggedIn(req, res, next){
     //return next();
     if (req.isAuthenticated())
        return next();
     res.redirect('/');
 }