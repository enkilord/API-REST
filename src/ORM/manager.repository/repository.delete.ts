import { indent } from './../orm.utils';
import { Table } from './../orm.interface.config';

export const deleteModelContent = (tableName: string): string => 
    `${indent()}delete = async(model: ${tableName}): Promise<${tableName}> => {\n` +
    `${indent()}${indent()}const query = deleteQuery('${tableName}', model.id.toString());\n` +
    `${indent()}${indent()}const res: any = await dbConn.execute(query);\n\n` +
    `${indent()}${indent()}return this.find(res.insertId);\n` +
    `${indent()}}\n`;