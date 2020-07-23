const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");

const app = express();
const todos = [];

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));

app.use(logger("tiny"));

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const todo = req.body.todo;
  todos.push(todo);
  res.json(req.body);
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
