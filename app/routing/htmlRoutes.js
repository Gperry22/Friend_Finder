var path = require('path');
var express = require("express");
var router = express.Router();
module.exports = router;



    // GET route for /survey returns survey.html.
    router.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    // USE route returns home.html for any undefined GET routes.
    // app.use(function (req, res) {
    //     res.sendFile(path.join(__dirname + '/../public/index.html'));
    // });

