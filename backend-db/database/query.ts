import * as Database from './database';
import { Request } from 'express';
import * as ev from 'express-validator';

// we're passing this to the 
// why do we do it like this? DD in TS is messy: https://github.com/microsoft/TypeScript/issues/30581
export function select(query: string): SelectedQuery {
    if (!(query in queries)) {
        throw new Error(`invalid query ${query}`);
    }

    return queries[query];
}

export function getQueries(): Iterable<string> {
    return Object.keys(queries);
}

// TODO decide type for query to return
export type QueryFunction = (req: Request) => unknown;
export type SelectedQuery = { validators: ev.ValidationChain[], fn: QueryFunction};

const queries: {[index: string]: SelectedQuery} = {
    "example": {
        validators: [],
        fn: exampleQuery,
    },
};

function exampleQuery(req: Request): unknown {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const params = req.query.params;
    return Database.db.prepare("SELECT * FROM eod.Birdfeeder limit 1;").all();
}