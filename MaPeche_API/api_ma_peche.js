var express = require("express");
var mysql = require("mysql");
const cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors())
var port = process.env.PORT || 8000;

//partie SQL
var client = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ma_peche",
});

client.connect((err) => {
    if (!err) {
        console.log("Connexion réussie");
    } else {
        console.log("Echec de la connexion : " + JSON.stringify(err));
    }
});
app.post("/:table/_create", function (req, res) {
    insertAccount(req.params.table, req.body.pseudo, req.body.nom, req.body.prenom, req.body.mdp, req.body.mail, res);
});
app.post("/:table/_createMarker", function (req, res) {
    insertSpot(req.params.table, req.body.lat, req.body.lng, req.body.nom, req.body.id_compte, res);
});

app.post("/:table/_get", function (req, res) {
    getAccount(req.params.table, req.body.mail, req.body.mdp, res);
});
app.post("/:table/_getMarkers", function (req, res) {
    getMarkers(req.params.table, req.body.id_compte, res);
});
app.post("/:table/_getMarkerFish", function (req, res) {
    getMarkerFish(req.params.table, req.body.id_point, res);
});
app.post("/:table/_getFish", function (req, res) {
    getFish(req.params.table, res);
});
app.listen(port, () => {
    console.log("Server app listening on port " + port);
});

function insertAccount(table, pseudo, nom, prenom, mdp, adresse_mail, res) {
    client.query(
        "INSERT INTO " +
        table + 
        "(`pseudo`,`nom`, `prenom`, `mdp`, `adresse_mail`) VALUES ('" +
        pseudo +
        "','" +
        nom +
        "', '" +
        prenom +
        "', '" +
        mdp +
        "', '" +
        adresse_mail +
        "') ",
        function (err, rows, fields) {
            if (!err) {
                console.log("Requête réussie");
                res.json({
                    "infomessage": "Requête effectuée avec succès"
                })
            } else {
                console.log("Echec de la requête" + JSON.stringify(err));
                res.json({
                    "errormessage": err
                })
            }
        }
    );
}

function insertSpot(table, lat, lng, nom, id_compte, res) {
    console.log(id_compte)
    console.log(nom)
    console.log(lat)
    console.log(lng)
    client.query(
        "INSERT INTO " +
        table + 
        "(`lat`, `lng`, `nom`, `id_compte`) VALUES ('" +
        lat +
        "','" +
        lng +
        "', '" +
        nom +
        "', '" +
        id_compte +
        "')",
        function (err, rows, fields) {
            if (!err) {
                console.log("Requête réussie");
                res.json({
                    "infomessage": "Requête effectuée avec succès"
                })
            } else {
                console.log("Echec de la requête" + JSON.stringify(err));
                res.json({
                    "errormessage": err
                })
            }
        }
    );
}





function getAccount(table, mail, password, res){
    client.query(
        "SELECT id_compte, pseudo, nom, prenom FROM " +
        table +
        " WHERE adresse_mail = '" +
        mail +
        "' AND mdp = '" +
        password + "'",
        function (err, rows, fields) {
        
            console.log(rows);
            if (!err) {
                console.log("Requête réussie");
                res.json({
                    result: rows,
                });
            } else {
                console.log("Echec de la requête" + JSON.stringify(err));
                res.json({
                    errormessage: err,
                });
            }
        }
    );
}


function getMarkers(table, id_compte, res){
    client.query(
        "SELECT id_point, lat, lng, nom FROM " +
        table +
        " WHERE id_compte = '" +
        id_compte + "'",
        function (err, rows, fields) {
        
            console.log(rows);
            if (!err) {
                console.log("Requête réussie");
                res.json({
                    result: rows,
                });
            } else {
                console.log("Echec de la requête" + JSON.stringify(err));
                res.json({
                    errormessage: err,
                });
            }
        }
    );
}


function getMarkerFish(table, id_point, res){
    client.query(
        "SELECT P.id_prise, poisson.nom, P.taille FROM " +
        table +
        " AS P INNER JOIN points ON points.id_point = P.id_point INNER JOIN poisson ON poisson.id_poisson = P.id_poisson WHERE P.id_point = '" +
        id_point + "'",
        function (err, rows, fields) {
        
            console.log(rows);
            if (!err) {
                console.log("Requête réussie");
                res.json({
                    result: rows,
                });
            } else {
                console.log("Echec de la requête" + JSON.stringify(err));
                res.json({
                    errormessage: err,
                });
            }
        }
    );
}


function getFish(table, res){
    client.query(
        "SELECT id_poisson, nom FROM " +
        table,
        function (err, rows, fields) {
        
            console.log(rows);
            if (!err) {
                console.log("Requête réussie");
                console.log(rows)
                res.json({
                    result: rows,
                });
            } else {
                console.log("Echec de la requête" + JSON.stringify(err));
                res.json({
                    errormessage: err,
                });
            }
        }
    );
}