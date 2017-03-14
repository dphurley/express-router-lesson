var express = require("express");
var router = express.Router();

// note routes
router.get("/", function (req, res) {
    var notes = [
        "Disneyland is a people trap built by a mouse",
        "Anything can be a ladle if you put a handle on it",
        "Ice-T is the only cast member to feature in all three Breakin' movies",
        "Tea is just leaf-flavored water"
    ];

    res.render("notes", {
        notes: notes
    });
});

router.get("/:id", function (req, res) {
    res.send("New note with id of " + req.params.id);
});

router.get("/:id/edit", function (req, res) {
    res.send("Edited note with id of " + req.params.id);
});

module.exports = router;
