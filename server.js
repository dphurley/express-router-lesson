var express = require('express');
var hbs = require('hbs');

var app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render('index.hbs');
});

var todosController = require(__dirname + '/controllers/todos_controller.js');
app.use("/todos", todosController);

var notesController = require(__dirname + '/controllers/notes_controller.js');
app.use("/notes", notesController);

app.listen(3000);
