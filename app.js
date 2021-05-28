const express = require("express");
const app = new express();
const port =process.env.PORT ||5000;
const nav = [
  {
    link: '/books',
    name: 'BOOKS'
  },
  {
    link: '/authors',
    name: 'AUTHORS'

  },
  {
    link: '/login',
    name: 'LOGIN/SIGNUP'
  },
  {
    link: '/addbook',
    name: 'ADD BOOK'
  },
  {
    link: '/addauthor',
    name: 'ADD AUTHOR'
  }
]
const bookRouter=require('./src/routes/bookRouter')(nav);
const authorRouter=require('./src/routes/authorRouter')(nav);
const loginRouter=require('./src/routes/loginRouter')(nav);
const addbookRouter=require('./src/routes/addbookRouter')(nav);
const addauthorRouter=require('./src/routes/addauthorRouter')(nav);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');
app.use(express.static('./public'));
app.use('/books', bookRouter);
app.use('/authors', authorRouter);
app.use('/login', loginRouter);
app.use('/addbook', addbookRouter);
app.use('/addauthor', addauthorRouter);
app.get('/', function (req, res) {
  // res.sendFile(__dirname+"/src/views/index.html");
  res.render('index',
    {
      nav,
      title: 'Library'

    });
});

app.listen(port,()=>{
  console.log("Server is ready at port number:"+port);
});