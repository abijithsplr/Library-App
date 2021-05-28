const express = require("express");
var fs = require('fs');
const bookRouter = express.Router();
function router(nav) {

  // {
  //   "books": [
  //     {
  //       "title": "Tom and jerry",
  //       "author": "Joseph Barbera",
  //       "genre": "Cartoon",
  //       "img": "tom and jerry.jpg"
  //     },
  //     {
  //       "title": " Harry Potter",
  //       "author": "J K Rowling",
  //       "genre": "Fantasy",
  //       "img": "harry.jpg"
  //     },
  //     {
  //       "title": "Pathumayude addu",
  //       "author": "Basheer",
  //       "genre": "Drama",
  //       "img": "basheer.jpg"
  //     }
  //   ]
  // }


  bookRouter.get('/', function (req, res) {
    fs.readFile('book.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse JSON object
      const user = JSON.parse(data.toString());
      var books = user.books;
      // print JSON object
      // console.log(authors);
      res.render('books',
        {
          nav,
          title: 'Library',
          books
        });
    });
  });
  bookRouter.get('/:i', function (req, res) {
    const id = req.params.i;
    fs.readFile('book.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse JSON object
      const user = JSON.parse(data.toString());
      var books = user.books;
      // print JSON object
      // console.log(authors);
      res.render('book',
        {
          nav,
          title: 'Library',
          book: books[id]
        });
    });

  });
  return bookRouter;
}
module.exports = router;