import { Table } from './../orm.interface.config';
import { indent } from "../orm.utils";

export const addModelContent = (tableName: string): string =>     
    `${indent()}add = (model: ${tableName}): any => {\n` +
    `${indent()}${indent()}const query = insertQuery('${tableName}', this.mapModelToDb(model))\n` +
    `${indent()}${indent()}var res = new Object;\n\n` +
    `${indent()}${indent()}dbConn.execute(query, [])\n` +
    `${indent()}${indent()}.then((res) => res = Object(res)[0]);\n\n` +
    `${indent()}${indent()}return res;\n` +
    `${indent()}}\n`;