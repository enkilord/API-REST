import { Table } from './../orm.interface.config';
import { indent } from "../orm.utils";

export const addModelContent = (tableName: string): string =>     
    `${indent()}add = async(model: ${tableName}): Promise<${tableName}> => {\n` +
    `${indent()}${indent()}const query = insertQuery('${tableName}', this.mapModelToDb(model))\n` +
    `${indent()}${indent()}const models: ${tableName}[] = await dbConn.execute(query);\n\n` +
    `${indent()}${indent()}const res: any = await dbConn.execute(query);\n\n` +
    `${indent()}${indent()}return this.find(res.insertId);\n` +
    `${indent()}}\n`;