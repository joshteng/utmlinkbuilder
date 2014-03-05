/**
 * ShareController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var merge = require('merge');

module.exports = {
  redirect: function(req, res, next){
    Link.findOne(req.param('id'), function foundUser (err, link){
      if (err) return next(err);
      if (!link) return next('Link doesn\'t exists.');

      var unique

      if (req.session.linksClicked) {
        //clicked on some links before
        if (req.session.linksClicked.indexOf(link.id) < 0){
          //haven't clicked this particular link before
          req.session.linksClicked.push(link.id);
          unique = { 'uniqueClicks': link.uniqueClicks += 1 }
        }
      }else{
        //have never clicked on any links before
        req.session.linksClicked = [link.id] //create a new session to keep track of links clicked
        unique = { 'uniqueClicks': link.uniqueClicks += 1 }
      }

      var attributes = merge({ 'totalClicks': link.totalClicks+=1 }, unique);

      Link.update(req.param('id'), attributes, function(){
        console.log("success");
      });

      res.redirect("http://" + link.fullUrl()); //non-blocking
    });
  },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ShareController)
   */
  _config: {}

  
};
