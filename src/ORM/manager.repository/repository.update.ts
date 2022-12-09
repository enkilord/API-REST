import { indent } from './../orm.utils';
import { Table } from './../orm.interface.config';

export const updateModelContent = (tableName: string): string => 
    `${indent()}update = async(model: ${tableName}): Promise<any> => {\n` +
    `${indent()}${indent()}const query = updateQuery('${tableName}', this.mapModelToDb(model), model.id.toString());\n\n` +
    `${indent()}${indent()}return await dbConn.execute(query);\n` +
    `${indent()}}\n`;
