var express = require('express');
var router = express.Router();

// todo routes
router.get("/", function (req, res) {
    var listOfTodosFromDatabase = [
        "fix bike",
        "buy groceries",
        "call Mom"
    ];

    res.render("todos", {
        todos: listOfTodosFromDatabase
    });
});

router.get("/:id", function (req, res) {
    res.send("New todo with id of " + req.params.id);
});

router.get("/:id/edit", function (req, res) {
    res.send("Edited todo with id of " + req.params.id);
});

module.exports = router;
