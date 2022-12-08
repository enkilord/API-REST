import { createRepositoryContent } from './repository.create';
import { Table } from "../orm.interface.config";
import * as fs from 'fs'

export const initializeRepositoy = (tables: Table[]) => {
    tables.forEach((table) => {
        console.debug(`\ncreating repository : ${table.name}\n`);
        fs.writeFile(`src/repositories/${table.name}.repository.ts`, createRepositoryContent(table), (err) => {
            if (err) throw err;
        });
    });
};