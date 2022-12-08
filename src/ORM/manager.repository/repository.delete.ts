import { indent } from './../orm.utils';
import { Table } from './../orm.interface.config';

export const deleteModelContent = (tableName: string): string => 
`${indent()}delete = (model: ${tableName}): any => {\n` +
`${indent()}${indent()}const query = deleteQuery('${tableName}', model.id.toString());\n` +
`${indent()}${indent()}var res = new Object;\n\n` +
`${indent()}${indent()}dbConn.execute(query, [])\n` +
`${indent()}${indent()}.then((res) => res = Object(res)[0]);\n\n` +
`${indent()}${indent()}return res;\n` +
`${indent()}}\n`;