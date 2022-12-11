import { createRouteManagerContent } from './route.content.route.manager';
import { Table } from "../orm.interface.config";
import * as fs from 'fs'
import { createRouteContent } from './route.content.route';

export const initializeRoutes = (tables: Table[]) => {
    fs.writeFile(`src/routes/route.manager.ts`, createRouteManagerContent(tables), (err) => {
        if (err) throw err;
    });

    tables.forEach((table) => {
        console.debug(`\ncreating route : ${table.name}\n`);

        fs.writeFile(`src/routes/${table.name}.routes.ts`, createRouteContent(table), (err) => {
            if (err) throw err;
        });
    });
} 