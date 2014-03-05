module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.session.User) {
    return res.redirect('link');
  }
  else{
    return next();
  }
};
