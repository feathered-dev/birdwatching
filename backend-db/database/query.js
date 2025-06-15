"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = select;
exports.all = all;
var Database = require("./database");
// we're passing this to the 
// why do we do it like this? DD in TS is messy: https://github.com/microsoft/TypeScript/issues/30581
function select(query) {
    if (!(query in queries)) {
        throw new Error("invalid query ".concat(query));
    }
    return queries[query];
}
function all() {
    return Object.keys(queries);
}
var queries = {
    "example": {
        validators: [],
        query: exampleQuery,
    },
};
function exampleQuery(req) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var params = req.query.params;
    return Database.db.prepare("SELECT * FROM eod.Birdfeeder limit 1;").all();
}
