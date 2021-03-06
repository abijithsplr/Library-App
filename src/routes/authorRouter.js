const express = require("express");
const authorRouter = express.Router();
var fs = require('fs');
function author(nav) {
  // {
  //   "authors": [
  //     {
  //       "name": "M. T. Vasudevan Nair",
  //       "language": "Malayalam",
  //       "dob": "15 July 1933 ",
  //       "img": "mt.jpg",
  //       "content": "Madath Thekkepaattu Vasudevan Nair (born 1933),popularly known as MT, is an Indian author, screenplay writer and film director.[1] He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.His debut novel Naalukettu (Ancestral Home- translated to English as The Legacy), wrote at the age of 23, won the Kerala Sahitya Akademi Award in 1958. His other novels include Manju (Mist), Kaalam (Time), Asuravithu (The Prodigal Son - translated to English as The Demon Seed) and Randamoozham (The Second Turn). The deep emotional experiences of his early days have gone into the making of MT's novels. Most of his works are oriented towards the basic Malayalam family structure and culture and many of them were path-breaking in the history of Malayalam literature. His three seminal novels on life in the matriarchal family in Kerala are Naalukettu, Asuravithu, and Kaalam. Randamoozham, which retells the story of the Mahabharatha from the point of view of Bhimasena, is widely credited as his masterpiece."
  //     },
  //     {
  //       "name": "Kamala Surayya",
  //       "language": "English, Malayalam",
  //       "dob": "31 March 1934",
  //       "img": "kamala.jpg",
  //       "content": "Kamala Surayya (born Kamala; 31 March 1934–31 May 2009), popularly known by her one-time pen name Madhavikutty and married name Kamala Das, was an Indian poet in English as well as an author in Malayalam from Kerala, India. Her popularity in Kerala is based chiefly on her short stories and autobiography, while her oeuvre in English, written under the name Kamala Das, is noted for the poems and explicit autobiography. She was also a widely read columnist and wrote on diverse topics including women's issues, child care, politics among others etc."
  //     },
  //     {
  //       "name": "William Shakespear",
  //       "language": "English",
  //       "dob": "26 April 1564",
  //       "img": "330px-Shakespeare.jpg",
  //       "content": "William Shakespeare (26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.He is often called England's national poet and the Bard of Avon (or simply the Bard)His extant works, including collaborations, consist of some 39 plays154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.They also continue to be studied and reinterpreted."
  //     }
  //   ]
  // }
  

  

  authorRouter.get('/', (req, res) => {
    // console.log(authors);
    // console.log(authors.length);
    fs.readFile('author.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }

      // parse JSON object
      const user = JSON.parse(data.toString());
      var authors = user.authors;
      // print JSON object
      // console.log(authors);
      res.render('authors',
        {
          nav,
          title: 'Library',
          authors
        });
    });

  });

  authorRouter.get('/:i', (req, res) => {
    const id = req.params.i;
    fs.readFile('author.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }
      // parse JSON object
      const user = JSON.parse(data.toString());
      var authors = user.authors;
      res.render('author', {
        nav,
        title: 'Library',
        author: authors[id]
      });
    });
  });
  return authorRouter;
}
module.exports = author;