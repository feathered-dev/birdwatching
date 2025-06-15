import sqlite from 'node:sqlite';

export const db = (() => {
    type Database = { name: string, location: string };

    const databases: Array<Database> = [
        { name: 'eod', location: './db/eod.db' },
        { name: 'xeno', location: './db/xeno.db' },
        { name: 'backbone', location: './db/backbone.db' },
    ];

    const db = new sqlite.DatabaseSync(":memory:");
    databases.forEach((database) => {
        db.exec(`ATTACH DATABASE ${database.location} AS ${database.name}`)
    });

    return db;
})();

export default db;