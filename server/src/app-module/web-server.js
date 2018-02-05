"use strict";

function webServer(portNum) {
  var port = portNum === undefined ? 3030 : portNum === null ? 3030 : portNum;
  return {
    start: function () {
      var express = require("express");
      var server = express();

      server.set("views", __dirname + "/server/views");
      server.set("view engine", "jade");

      server.use(express.static(__dirname + "/public"));

      server.get("*", function (req, res) {
        res.render("index");
      });

      server.listen(port);
      console.log("Listing on port " + port + "...");
    }
  };
}

module.exports = webServer;

