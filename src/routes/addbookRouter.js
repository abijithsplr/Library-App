const express = require("express");
const addbookRouter = express.Router();
function addbook(nav) {

  addbookRouter.get('/', (req, res) => {
    res.render('addbook', {
      nav,
      title: 'Library',
      head: 'ADD BOOK',
      
    });
  });
return addbookRouter;
}
module.exports=addbook;