var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.json());
var port = process.env.PORT || 8080;

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
 
 
  insertHotel(req.params.table, req.body.id, req.body.libelle, req.body.etoile, res);
});
app.post("/:table/:id/_update", function (req, res) {
 
  updateHotel(req.params.table, req.params.id, req.body.libelle, req.body.etoile, res);
});


app.post("/:table/:id/_delete", function (req, res) {
  
 
 
  deleteHotel(req.params.table, req.params.id, res);
});


app.delete("/:table/:id/_delete", function (req, res) {
  
 
  deleteHotel(req.params.table, req.params.id, res);
});

app.get("/:table/:mail/:mdp/_get", function (req, res) {
  
 
  getAccount(req.params.table, req.params.id, res);
});

app.post("/:table/bedroom/_search", function (req, res) {
 
 
  searchBedroom(req.params.table, req.body.date, req.body.etoile, res);
});

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});

function insertHotel(table, id, libelle, etoile, res) {
  client.query(
    "INSERT INTO " +
      table + 
      "(`idHotel`,`Libelle`, `Etoile`) VALUES ('" +
      id +
      "','" +
      libelle +
      "', '" +
      etoile +
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

function updateHotel(table, id, libelle, etoile, res) {
  client.query(
    "UPDATE " +
      table +
      " SET Libelle = '" +
      libelle +
      "', Etoile = '" +
      etoile +
      "' WHERE idHotel = " + id +";",
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

function deleteHotel(table, id, res){
  client.query(
    "DELETE FROM `" +
      table +
      "` WHERE `idHotel` = " + id +";",
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
    "SELECT * FROM " +
      table +
      " WHERE adresse_mail LIKE '" +
      mail +
      "' AND mdp LIKE '" +
      password + "'",
    function (err, rows, fields) {
      
      console.log(rows);
      if (!err) {
        console.log("Requête réussie");
        res.json({
          "result": rows
        });
      } else {
        console.log("Echec de la requête" + JSON.stringify(err));
        res.json({
          "errormessage": err
        })
      }
    }
  );
}

function searchBedroom(table, date, etoile, res){
  client.query(
    "SELECT typeschambre.Description, Prix, hotels.Libelle, hotels.Etoile FROM " +
      table +
      " INNER JOIN hotels ON hotels.idHotel = tarifs.hotel INNER JOIN typeschambre ON TypeChambre = typeschambre.idTypeChambre WHERE hotels.Etoile = '" +
      etoile +
      "' AND '"+date+"' BETWEEN DateDebut AND DateFin",
    function (err, rows, fields) {
      
      
      if (!err) {
        console.log("Requête réussie");
        res.json({
          "result": rows
        });
      } else {
        console.log("Echec de la requête" + JSON.stringify(err));
        res.json({
          "errormessage": err
        })
      }
    }
  );
}