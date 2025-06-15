import express from 'express';
import { Query } from './database';

const app = express();
const port = 3000;
const api_v1 = express.Router();

app.use("/api/v1", api_v1);

for(const query of Query.getQueries()) {
    const { validators, fn } = Query.select(query);
    for (const validator of validators) {
            api_v1.get(`query/${query}`, validator);
    }

    api_v1.get(`query/${query}`, (req, res) => {
        res.setHeader('Cache-Control', 'max-age=60')
        res.status(200)
            .json(fn(req))
            .end();
    });
}

app.listen(port);