"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var database_1 = require("./database");
var app = (0, express_1.default)();
var port = 3000;
var api_v1 = express_1.default.Router();
app.use("/api/v1", api_v1);
var _loop_1 = function (elem) {
    var _b = database_1.Query.select(elem), validators = _b.validators, query = _b.fn;
    for (var _c = 0, validators_1 = validators; _c < validators_1.length; _c++) {
        var validator = validators_1[_c];
        api_v1.get("query/".concat(elem), validator);
    }
    api_v1.get("query/".concat(elem), function (req, res) {
        res.setHeader('Cache-Control', 'max-age=60');
        res.status(200)
            .json(query(req))
            .end();
    });
};
for (var _i = 0, _a = database_1.Query.getQueries(); _i < _a.length; _i++) {
    var elem = _a[_i];
    _loop_1(elem);
}
app.listen(port);
