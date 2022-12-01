import { insertQuery } from './query/insert';
import { getRolesFixtures } from './fixtures/fixtures.roles';
import * as dbConn from './mysql.connector';
import { createTableQuery } from './query/createTable';
import { Table, Parameter } from '../manager.orm/orm.interface.config'

const populateDataBase = async(tables: Table[]) => {
    for (const table of tables) {
        const query = createTableQuery(table);
        await dbConn.execute(query, []).then(() => console.debug(`\nquery :\n${query}}\nexecuted`));
    }
}

const loadFixtures = async() => {
    for (const fixtures of getRolesFixtures()) {
        const query = insertQuery('Roles', [fixtures]);
        await dbConn.execute(query, []).then(() => console.debug(`\nquery :\n${query}}\nexecuted`));;
    }
};

export const initializeDataBase = async(tables: Table[]) => {
    console.debug('===== 🏊‍♂️ Initializing database pool 🏊‍♂️ =====');
    dbConn.init();

    console.debug('===== 🛩️ Populating database 🛩️ =====');
    await populateDataBase(tables);

    console.debug('\n===== 🖌️ Adding fixtures 🖌️ =====');
    await loadFixtures();
}
