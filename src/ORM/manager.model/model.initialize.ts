import { createModelContent } from './model.create';
import { Table } from '../orm.interface.config';
import * as fs from 'fs'

export const initializeModels = (tables: Table[]) => {
    tables.forEach((table) => {
        console.debug(`\ncreating model : ${table.name}\n`);
        fs.writeFile(`src/model/${table.name}.ts`, createModelContent(table), (err) => {
            if (err) throw err;
        });
    });
}
