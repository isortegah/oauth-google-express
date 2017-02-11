/**
 * Created by ISORTEGAH on 10/02/2017
 */
module.exports = function(app , express) {
    app.use('/', require('./../server/controllers/HomeController'));
    return app;
}