const express = require("express");
const author = require("./authorRouter");
const addauthorRouter = express.Router();
function addauthor(nav) {

  addauthorRouter.get('/', (req, res) => {
    res.render('addauthor', {
      nav,
      title: 'Library',
      head: 'ADD AUTHOR'

    });
    // addauthorRouter.get('/admin', (req, res) => {
    //   let item = {
    //     name: req.query.name,
    //     language: req.query.language,
    //     dob: req.query.dob,
    //     img: req.query.img,
    //     content: req.query.content
    //   }
    //   author(nav,item);
    //   res.redirect('/authors');

    // });
  });
  return addauthorRouter;
}
module.exports = addauthor;