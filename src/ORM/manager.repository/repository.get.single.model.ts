import { indent } from '../orm.utils';

const getFind = (tableName: string): string =>
    `${indent()}find = async(id: number): Promise<${tableName}> => {\n` +
    `${indent()}${indent()}const query = selectQuery('${tableName}', [{ name: 'id', value: id.toString() }]);\n\n` +
    `${indent()}${indent()}return await dbConn.execute(query);\n` +
    `${indent()}}\n`;

const getFindBy = (tableName: string): string =>
    `${indent()}findBy = async(parameter: DB_Parameter): Promise<${tableName}> => {\n` +
    `${indent()}${indent()}const query = selectQuery('${tableName}', [parameter]);\n\n` +
    `${indent()}${indent()}return await dbConn.execute(query);\n` +
    `${indent()}}\n`;

export const getSingleModelContent = (tableName: string): string => 
    `${getFind(tableName)}\n` +
    `${getFindBy(tableName)}`;
