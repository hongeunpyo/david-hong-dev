"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("Hello, world!");
});
exports.default = app;
//# sourceMappingURL=app.js.map