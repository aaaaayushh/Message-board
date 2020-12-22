var express = require("express");
const moment = require("moment");
var router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Dobi",
    added: new Date(),
  },
  {
    text: "Dodho nai ban have chal",
    user: "Dobo",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});
router.post("/new", function (req, res, next) {
  const description = req.body.description;
  const username = req.body.username;
  const date = new moment().startOf("hour" - 1).fromNow();
  messages.push({
    text: description,
    user: username,
    added: date,
  });
  res.redirect("/");
});

module.exports = router;
