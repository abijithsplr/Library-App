const express = require("express");
const loginRouter = express.Router();
function login(nav) {

  loginRouter.get('/', (req, res) => {
    res.render('login', {
      nav,
      title: 'Library',
      head: 'Login',
      newlink: '/signup'
    });
  });

  loginRouter.get('/signup', (req, res) => {
    res.render('signup', {
      nav,
      title: 'Library',
      head: 'Signup',
    });
  //   res.send("cghbnjkml");
  });
  return loginRouter;
}
module.exports = login;