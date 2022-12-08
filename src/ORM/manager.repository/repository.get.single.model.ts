import { indent } from '../orm.utils';

const getFind = (tableName: string): string =>
    `${indent()}find = (id: number): ${tableName} => {\n` +
    `${indent()}${indent()}const query = selectQuery('${tableName}', [{ name: 'id', value: id.toString() }]);\n` +
    `${indent()}${indent()}var resModel = new ${tableName}();\n\n` +
    `${indent()}${indent()}dbConn.execute(query, [])\n` +
    `${indent()}${indent()}.then((res) => resModel = Object(res)[0]);\n\n` +
    `${indent()}${indent()}return resModel;\n` +
    `${indent()}}\n`;

const getFindBy = (tableName: string): string =>
    `${indent()}findBy = (parameter: DB_Parameter): ${tableName} => {\n` +
    `${indent()}${indent()}const query = selectQuery('${tableName}', [parameter]);\n` +
    `${indent()}${indent()}var resModel = new ${tableName}();\n\n` +
    `${indent()}${indent()}dbConn.execute(query, [])\n` +
    `${indent()}${indent()}.then((res) => resModel = Object(res)[0]);\n\n` +
    `${indent()}${indent()}return resModel;\n` +
    `${indent()}}\n`;

export const getSingleModelContent = (tableName: string): string => 
    `${getFind(tableName)}\n` +
    `${getFindBy(tableName)}`;
