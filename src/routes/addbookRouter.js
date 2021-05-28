const express = require("express");
const addbookRouter = express.Router();
const fs =require('fs')
function addbook(nav) {

  addbookRouter.get('/', (req, res) => {
    res.render('addbook', {
      nav,
      title: 'Library',
      head: 'ADD BOOK',
      
    });
  });
  addbookRouter.get('/admin',(req,res)=>{
    var item = {
      "title": req.query.title,
      "author": req.query.author,
      "genre": req.query.genre,
      "img": req.query.img
    }
    fs.readFile('book.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse JSON object
      const user = JSON.parse(data.toString());
      user.books.push(item);
      // print JSON object
      console.log(user);
      var ob = JSON.stringify(user);
      fs.writeFile('book.json', ob, (err) => {
        if (err) {
          throw err;
        }
        console.log("JSON data is saved.");
      });
    });
    res.redirect('/books');
  })
return addbookRouter;
}
module.exports=addbook;