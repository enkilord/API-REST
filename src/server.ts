import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as path from 'path';
// import routes from './api/routes';
// import errorHandler from './api/middlewares/error-handler.middleware';
import * as dbConn from './manager.database/mysql.connector';

const app = express();
const port = 3000;

// create database pool
dbConn.init();

// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

// app.use('/api/', routes);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`)
});