import { createPool, Pool, createConnection, Connection, Query } from 'mysql';
import { DATA_SOURCES } from '../../../vars.config';

const dataSource = DATA_SOURCES.mySqlDataSource;
const conn = createConnection({
        host: dataSource.HOST,
        user: dataSource.USER,
        password: dataSource.PASSWORD,
        database: dataSource.DATABASE,
        port: dataSource.PORT,
    });

/**
 * executes SQL queries in MySQL dbs
 *
 * @param {string} query - provide a valid SQL query
 */
export const execute = (query: string): Promise<any> => {
    var res: any;

    return new Promise<any>((resolve, reject) => {
        conn.query(query, (err, result, fields) => {
            if (err) {
                return reject(err);
            }

            resolve(JSON.parse(JSON.stringify(result)));
        });
    });
}
