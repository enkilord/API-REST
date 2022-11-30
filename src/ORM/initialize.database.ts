import * as dbConn from '../manager.database/mysql.connector';
import { createTableQuery } from './database.utils/query.createTable';
import * as dbConf from '../../orm.config.json';
import { Table, Parameter } from './interface.orm.config';

const mapParameter = (parameter: Parameter): Parameter => {
    console.debug(` - Mapping parametre : ${parameter.name}`);

    return {
        name: parameter.name,
        type: parameter.type,
        nullable: parameter.nullable,
        foreign_key: parameter.foreign_key,
    };
}

const mapTable = (table: Table): Table => {
    var parameters: Parameter[] = [];

    console.debug(`\n===== Mapping table : ${table.name} =====`);
    table.parameters.forEach((c_param: Parameter) => parameters.push(mapParameter(c_param)));

    return {
        name: table.name,
        parameters: parameters
    };
};

const populateDataBase = () => {
    console.log('populating database\n');

    dbConf.tables.forEach(async (c_table) => {
        const query = createTableQuery(mapTable(c_table));
        await dbConn.execute(query, []);
    });
}

export const initializeDataBase = () => {
    dbConn.init();
    populateDataBase();
}
