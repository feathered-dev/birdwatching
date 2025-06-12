import http from 'http';
import sqlite from 'node:sqlite';

const db = new sqlite.DatabaseSync("./db/eod.db");

const server = http.createServer((_req, res) => {
    // POC
    let record = db.prepare("SELECT * FROM Birdfeeder limit 1;").get();
    res.write(record?.["LOC_ID"]);
    res.end();
})

// this port needs to stay in sync with ../compose.yaml
server.listen(3000, () => {
    console.log("server is running");
})

// right now we never close the db connection, obviously that's not ideal