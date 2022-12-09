import { indent } from './../orm.utils';
import { Table } from './../orm.interface.config';

export const deleteModelContent = (tableName: string): string => 
`${indent()}delete = async(model: ${tableName}): Promise<any> => {\n` +
`${indent()}${indent()}const query = deleteQuery('${tableName}', model.id.toString());\n\n` +
`${indent()}${indent()}return await dbConn.execute(query)\n` +
`${indent()}}\n`;