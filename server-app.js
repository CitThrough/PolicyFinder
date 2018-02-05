"use strict";

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var webServer = require("./server/src/app-module/web-server");
var server = webServer(null);
server.start();