const express = require("express");

const bookRouter = express.Router();
function router(nav) {

  var books = [
    {
      title: 'Tom and jerry',
      author: 'Joseph Barbera',
      genre: 'Cartoon',
      img: 'tom and jerry.jpg'
    },
    {
      title: 'Harry Potter',
      author: 'J K Rowling',
      genre: 'Fantasy',
      img: 'harry.jpg'
    },
    {
      title: 'Pathumayude addu',
      author: 'Basheer',
      genre: 'Drama',
      img: 'basheer.jpg'
    }
  ]


  bookRouter.get('/', function (req, res) {

    res.render('books',
      {
        nav,
        title: 'Library',
        books
      });
  })
  bookRouter.get('/:i', function (req, res) {
    const id = req.params.i;
    res.render('book',
      {
        nav,
        title: 'Library',
        book: books[id]
      });
  });
  return bookRouter;
}
module.exports = router;