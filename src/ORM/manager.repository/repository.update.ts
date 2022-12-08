import { indent } from './../orm.utils';
import { Table } from './../orm.interface.config';

export const updateModelContent = (tableName: string): string => 
    `${indent()}update = (model: ${tableName}): any => {\n` +
    `${indent()}${indent()}const query = updateQuery('${tableName}', this.mapModelToDb(model), model.id.toString());\n` +
    `${indent()}${indent()}var res = new Object;\n\n` +
    `${indent()}${indent()}dbConn.execute(query, [])\n` +
    `${indent()}${indent()}.then((res) => res = Object(res)[0]);\n\n` +
    `${indent()}${indent()}return res;\n` +
    `${indent()}}\n`;
