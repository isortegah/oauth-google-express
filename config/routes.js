/**
 * Created by ISORTEGAH on 10/02/2017
 */
module.exports = function(app , express) {
    app.set('views', __dirname + './../views');
	app.set('view engine', 'ejs');

    app.use('/', require('./../server/controllers/HomeController'));
    app.use('/auth/google',require('./../server/controllers/GoogleController'));
    return app;
}