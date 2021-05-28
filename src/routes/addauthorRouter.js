const express = require("express");
const author = require("./authorRouter");
var fs = require('fs');
const addauthorRouter = express.Router();
function addauthor(nav) {

  addauthorRouter.get('/', (req, res) => {
    res.render('addauthor', {
      nav,
      title: 'Library',
      head: 'ADD AUTHOR'

    });
  });
  addauthorRouter.get('/admin', (req, res) => {
    var item = {
      "name": req.query.name,
      "language": req.query.language,
      "dob": req.query.dob,
      "img": req.query.img,
      "content": req.query.content
    }
    console.log(item);
    fs.readFile('author.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse JSON object
      const user = JSON.parse(data.toString());
      user.authors.push(item);
      // print JSON object
      console.log(user);
      var ob = JSON.stringify(user);
      fs.writeFile('author.json', ob, (err) => {
        if (err) {
          throw err;
        }
        console.log("JSON data is saved.");
      });
    });

    author(nav, item);


    res.redirect('/authors');
  });
  return addauthorRouter;
}
module.exports = addauthor;