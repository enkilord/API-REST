import { insertQuery } from './query/insert';
import { getFixtures } from './fixtures/fixtures.getFixtures';
import * as dbConn from './mysql.connector';
import { createTableQuery } from './query/createTable';
import { Table } from '../orm.interface.config'

const fixturesToLoad: string[] = [
    "Role"
];

const populateDataBase = async(tables: Table[]) => {
    for (const table of tables) {
        const query = createTableQuery(table);
        await dbConn.execute(query).then(() => console.debug(`\nquery :\n${query}\nexecuted\n`));
    }
}

const loadFixtures = async() => {
    for (const fixtureToLoad of fixturesToLoad) {
        for (const fixtures of getFixtures(fixtureToLoad)) {
            const query = insertQuery(fixtureToLoad, fixtures.parameters);
            await dbConn.execute(query).then(() => console.debug(`\nquery :\n${query}\nexecuted\n`));;
        }
    }
};

export const initializeDataBase = async(tables: Table[]) => {
    console.debug('===== đŠī¸ Populating database đŠī¸ =====');
    await populateDataBase(tables);

    console.debug('===== đī¸ Adding fixtures đī¸ =====');
    await loadFixtures();
}
