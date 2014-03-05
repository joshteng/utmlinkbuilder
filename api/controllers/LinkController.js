/**
 * LinkController
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

module.exports = {
  'new': function(req, res){
    res.view();
  },

  create: function (req, res, next) {
    Link.create(req.params.all(), function userCreated (err, link) {
      if (err) {
        req.session.flash = {
          err: err
        }
        return res.redirect('/link/new');
      }
      res.redirect('/link');
    })
  },

  edit: function(req, res, next) {
    Link.findOne(req.param('id'), function foundUser (err, link){
      if (err) return next(err);
      if (!link) return next('Link doesn\'t exists.');

      res.view({
        link: link
      });
    });
  },

  update: function(req, res, next) {
    Link.update(req.param('id'), req.params.all(), function linkUpdated (err, link){
      if (err) {
        req.session.flash = {
          err: err
        }
        return res.redirect('/link/edit/' + req.param('id'));
      }

      res.redirect('/link');
    });
  },

  destroy: function(req, res, next){
    Link.findOne(req.param('id'), function foundUser (err, link){
      if (err) return next(err);
      if (!link) return next('link doesn\'t exists.');

      Link.destroy(link.id, function userDestroyed(err){
        if (err) return next(err);
      });

      res.redirect('/link');
    })
  },

  index: function(req, res, next) {
    Link.find({
      userId: req.session.User.id
    },
      function foundLinks (err, links) {
      if (err) return next(err);
      res.view({
        links: links
      });
    });
  },
  _config: {}
};
