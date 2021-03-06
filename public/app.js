const express = require("express");
const morgan = require("morgan");
const app = express();
const main = require("../views/main")
const { db, User, Page } = require('../models');
const wikiRouter = require('../routes/wiki');
// const userRouter = require('../routers/users');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use('/wiki', wikiRouter);
// app.use('/users', userRouter);

app.get("/", (req, res, next) => {
  res.redirect('/wiki');
})


app.get("/", async (req, res, next) => {
  try {
    res.send(main())
    console.log('hello world')
  } catch (error) {
    next(error)
  }
});

app.use(express.urlencoded({extended:false}));

const makeDb = async () => {
  await db.sync({ force: true });

  const PORT = 3000;


  app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
}

makeDb();


