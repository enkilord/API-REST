import { Table } from './../orm.interface.config';
import { indent } from "../orm.utils";

export const addModelContent = (tableName: string): string =>     
    `${indent()}add = async(model: ${tableName}): Promise<any> => {\n` +
    `${indent()}${indent()}const query = insertQuery('${tableName}', this.mapModelToDb(model))\n\n` +
    `${indent()}${indent()}return await dbConn.execute(query)\n` +
    `${indent()}}\n`;