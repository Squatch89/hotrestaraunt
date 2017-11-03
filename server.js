const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemon = require("nodemon");


const app = express();
const PORT = process.env.PORT || 3000;

const reservations = [

];


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/tables.html", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reserve.html", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations.slice(0, 5));
});

app.get("/api/waitlist", function(req, res) {
    return res.json(reservations.slice(5));
});

app.post("/api/tables", function (req, res) {
    const newTable = req.body;
    // newTable.routeName = newTable.name.replace(/\s+/g, "");

    reservations.push(newTable);

    res.json(reservations);

});

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});