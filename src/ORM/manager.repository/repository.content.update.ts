import { indent } from '../orm.utils';
import { Table } from '../orm.interface.config';

export const updateModelContent = (tableName: string): string => 
    `${indent()}update = async(model: ${tableName}): Promise<${tableName}> => {\n` +
    `${indent()}${indent()}const query = updateQuery('${tableName}', this.mapModelToDb(model), model.id.toString());\n` +
    `${indent()}${indent()}const res: any = await dbConn.execute(query);\n\n` +
    `${indent()}${indent()}return this.find(res.insertId);\n` +
    `${indent()}}\n`;
