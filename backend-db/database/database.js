"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var node_sqlite_1 = require("node:sqlite");
exports.db = (function () {
    var databases = [
        { name: 'eod', location: './db/eod.db' },
        { name: 'xeno', location: './db/xeno.db' },
        { name: 'backbone', location: './db/backbone.db' },
    ];
    var db = new node_sqlite_1.default.DatabaseSync(":memory:");
    databases.forEach(function (database) {
        db.exec("ATTACH DATABASE ".concat(database.location, " AS ").concat(database.name));
    });
    return db;
})();
exports.default = exports.db;
