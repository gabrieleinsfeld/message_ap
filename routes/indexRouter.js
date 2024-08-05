const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const { Router } = require("express");

const indexRouter = Router();
const hello = "Hello World";

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Board", messages });
});

indexRouter.get("/message/:index", (req, res) => {
  res.render("message", {
    text: messages[req.params.index]["text"],
    author: messages[req.params.index]["user"],
    added: messages[req.params.index]["added"],
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
